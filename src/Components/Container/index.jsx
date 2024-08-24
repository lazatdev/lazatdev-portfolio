export const Container = ({children, className}) => 
{
    return(
        <div className={`container px-3 md:px-5 lg:px-12 xl:px-24 mx-auto ${className}`}>
            {children}
        </div>
    )
}