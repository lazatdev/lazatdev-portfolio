export const SpecialHeading = ({title,description}) =>
{
    return (
        <div className="heading-section space-y-4 text-center">
            <h2 className="text-[42px] font-bold uppercase">{title}</h2>
            <div className="shapes mx-auto relative w-[100px] flex justify-between items-center before:absolute space-x-2 before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[3px] before:bg-primary">
                <span className="circle inline-block bg-primary rounded-full h-4 w-4"></span>
                <span className="circle inline-block bg-primary rounded-full h-4 w-4"></span>
                <span className="circle inline-block bg-primary rounded-full h-4 w-4"></span>
            </div>
            <p className="text-[23px] font-light">{description}</p>
        </div>
    )
}