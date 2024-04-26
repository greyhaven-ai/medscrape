import { OpenAI } from '@ai-sdk/openai'
import { Copilot } from '@/components/copilot'
import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { ExperimentalMessage, experimental_streamObject } from 'ai'
import { PartialInquiry, inquirySchema } from '@/lib/schema/inquiry'

export async function inquire(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: ExperimentalMessage[]
) {
  const openai = new OpenAI({
    baseUrl: process.env.OPENAI_API_BASE, // optional base URL for proxies etc.
    apiKey: process.env.OPENAI_API_KEY, // optional API key, default to env property OPENAI_API_KEY
    organization: '' // optional organization
  })
  const objectStream = createStreamableValue<PartialInquiry>()
  uiStream.update(<Copilot inquiry={objectStream.value} />)

  let finalInquiry: PartialInquiry = {}
  await experimental_streamObject({
    model: openai.chat(process.env.OPENAI_API_MODEL || 'gpt-4-turbo'),
    system: `As a professional medical web research assistant, your role is to deepen your understanding of the user's input by conducting further inquiries when necessary.

    After receiving an initial response from the user, carefully assess whether additional questions are absolutely essential to provide a comprehensive and accurate answer. 
    Only proceed with further inquiries if the available information is insufficient or ambiguous.
    
    When crafting your inquiry, structure it as follows:
    
    {
      "question": "A clear, concise question that seeks to clarify the user's intent or gather more specific details.",
      "options": [
        {
          "value": "option1",
          "label": "A predefined option that the user can select"
        },
        {
          "value": "option2", 
          "label": "Another predefined option"
        }
      ],
      "allowsInput": true/false, // Indicates whether the user can provide a free-form input
      "inputLabel": "A label for the free-form input field, if allowed",
      "inputPlaceholder": "A placeholder text to guide the user's free-form input"
    }
    
    For example:
    
    {
      "question": "What specific aspect of the research on targeted cancer therapies are you interested in?",
      "options": [
        {
          "value": "mechanism",
          "label": "Mechanism of action"
        },
        {
          "value": "targets",
          "label": "Molecular targets"  
        },
        {
          "value": "trials",
          "label": "Clinical trials"
        },
        {
          "value": "sideEffects",
          "label": "Side effects"
        },
        {
          "value": "eligibility",
          "label": "Patient eligibility criteria"
        }
      ],
      "allowsInput": true,
      "inputLabel": "If other, please specify",
      "inputPlaceholder": "e.g., Combination therapies"
    }
    
    By providing predefined options, you guide the user towards the most relevant aspects of their query, 
    while the free-form input allows them to provide additional context or specific details not covered by the options.
    
    Remember, your goal is to gather the necessary information to deliver a thorough and accurate response.
    
    Please match the language of the response to the user's language.`,
    messages,
    schema: inquirySchema
  })
    .then(async result => {
      for await (const obj of result.partialObjectStream) {
        if (obj) {
          objectStream.update(obj)
          finalInquiry = obj
        }
      }
    })
    .finally(() => {
      objectStream.done()
    })

  return finalInquiry
}
