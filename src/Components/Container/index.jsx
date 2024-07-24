export const Container = ({children, className}) => 
{
    return(
        <div className={`container px-3 md:px-5 mx-auto ${className}`}>
            {children}
        </div>
    )
}