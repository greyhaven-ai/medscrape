import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What is the Texas Hip and Knee Conference?',
    message: 'What is the Texas Hip and Knee Conference?'
  },
  {
    heading:
      'What procedures does the Texas Hip and Knee Center specialize in?',
    message: 'What procedures does the Texas Hip and Knee Center specialize in?'
  },
  {
    heading: 'Does TCU medical school put an emphasis on primary care?',
    message:
      'According to their website, does TCU medical school put an emphasis on primary care?'
  },
  {
    heading:
      'Does TCU medical school offer an orthopedic clerkship for its students?',
    message:
      'According to their website, does TCU medical school offer an orthopedic clerkship for its students?'
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
