import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading:
      'What are the best approaches to treating antibiotic-resistant infections?',
    message:
      'What are the best approaches to treating antibiotic-resistant infections?'
  },
  {
    heading:
      'What factors influence success rates in joint replacement surgery?',
    message:
      'What factors influence success rates in joint replacement surgery?'
  },
  {
    heading: 'Describe the mechanism of action of SGLT2 inhibitors',
    message: 'Describe the mechanism of action of SGLT2 inhibitors'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
