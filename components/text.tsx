import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/libs";


const textVariants = cva('',{
    variants:{
        variant:{
            heading:'text-2xl font-semibold text-foreground',
            subHeading: 'text-xl font-medium text-muted-foreground',
            body:'text-base text-foreground text-muted',
            muted:'text-sm text-muted-foreground',
            caption:'text-xs text-muted-foreground',
            error:'text-sm text-red-500 font-medium'
        }
    },
    defaultVariants:{
        variant:'body'
    }
})


interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}
  
  const Text: React.FC<TextProps> = ({ children, variant, className, ...props }) => {
    return (
      <p className={cn(textVariants({ variant }), className)} {...props}>
        {children}
      </p>
    )
  }
  
  export default Text