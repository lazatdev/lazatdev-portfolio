import {PORTFOLIO_FILTERS, PORTFOLIO_ITEMS} from '../../Constants'
import {Container, SpecialHeading} from '../../Components'
import { useState } from 'react'

export const PortfolioSection = () =>
{
    const [filter, setFilter] = useState("all")
    const [modalOpen, setModalOpen] = useState(false)
    const [projectItem, setProjectItem] = useState(null)

    const selectFilter = (itemFilter) =>
    {
        setFilter(itemFilter)
    }

    const showModal = (projectId) =>
    {
        setModalOpen(!modalOpen)
        setProjectItem(PORTFOLIO_ITEMS.find(project => project.id === projectId))
    }

    const closeModal = () =>
    {
        setModalOpen(false)
    }

    return (
        <section id="portfolio" className="py-10">
            <Container>
                <SpecialHeading 
                    title="Portfolio" 
                    description="A set of works including chalange, personal and real projects"
                />
                <div className="filter space-x-2 items-center h-[100px] mt-10 mb-5 flex justify-center flex-wrap">
                    {
                        PORTFOLIO_FILTERS.map((itemFilter, index) => (
                            <button 
                                className={`${itemFilter === filter ? 'bg-primary' : 'bg-primary/70'} inline-block hover:bg-primary transition-colors duration-300 px-4 py-1 uppercase text-white rounded-md`}
                                key={index}
                                onClick={() => selectFilter(itemFilter)}
                            >
                                {itemFilter}
                            
                            </button>
                        ))
                    }
                </div>
                <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        PORTFOLIO_ITEMS
                        .filter(item => {
                            if(filter === 'all')
                                return true
                            else 
                                return item.tags.includes(filter)
                        })
                        .map(item => (
                            <div 
                                className="project rounded-[10px] border-2 border-solid border-third px-1 py-1" 
                                key={item.id}
                                data-tags={item.tags.join(" ")}
                            >
                                <div className="overflow-hidden block">
                                    <img 
                                        className="rounded-t-[10px] cursor-pointer hover:rotate-12 hover:scale-150 transition-transform duration-300" 
                                        src={item.img}
                                        onClick={() => showModal(item.id)}
                                    />
                                </div>
                                <div className="details px-5 py-5">
                                        <h3 
                                            className="text-[23px] font-bold capitalize cursor-pointer text-primary translate-y-0 hover:translate-x-3 transition-transform duration-300 ease-in"
                                            onClick={() => showModal(item.id)}
                                        >
                                            {item.title}
                                        </h3>
                                        
                                    <p className="text-[19px] font-light">
                                        {item.description}
                                    </p>
                                    <div className="tags space-x-1 mt-2">
                                        {
                                            item.tags.map((tag,index) => (
                                                <span
                                                    className="inline-block rounded-md text-white px-2 py-1 uppercase bg-primary/70" 
                                                    key={index}>
                                                    {tag}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    modalOpen && 
                    (
                        <div className="modal fixed z-30 top-0 left-0 right-0 before:absolute before:bg-black/70 
                                        before:top-0 before:left-0 before:h-screen before:w-screen before:-z-10">
                            <div className="relative mt-14 w-5/6 md:w-3/4 lg:w-1/2 mx-auto bg-third px-5 py-5 rounded-md z-10">
                                <button 
                                    className="absolute -top-5 -right-5 rounded-full bg-primary text-white text-center h-10 w-10 leading-10 font-bold"
                                    onClick={closeModal}
                                >
                                    X
                                </button>
                                <img 
                                    className="rounded-t-[10px]" 
                                    src={projectItem.img}
                                />
                                <h4 className="text-[23px] font-bold capitalize mt-2">
                                    {projectItem.title}
                                </h4>
                                <p className="text-[19px] font-light">
                                    {projectItem.description}
                                </p>
                                <ul className="project-links mt-2">
                                    <li className="font-[600] text-[19px] uppercase">
                                        <span className="w-[150px] relative inline-block after:absolute after:right-3 after:content-[':']">
                                            live
                                        </span>
                                        <a 
                                            className="capitalize text-[19px] font-[500]" 
                                            href={projectItem.links.previewLink} 
                                            target="_blank"
                                        >
                                            click here
                                        </a>
                                    </li>
                                    <li className="font-[600] text-[19px] uppercase">
                                        <span className="w-[150px] relative inline-block after:absolute after:right-3 after:content-[':']">
                                            github
                                        </span>
                                        <a 
                                            className="capitalize text-[19px] font-[500]" 
                                            href={projectItem.links.githubLink} 
                                            target="_blank"
                                        >
                                            click here
                                        </a>
                                    </li>
                                    <li className="font-[600] text-[19px] uppercase">
                                        <span className="w-[150px] relative inline-block after:absolute after:right-3 after:content-[':']">
                                            ui design
                                        </span>
                                        <a 
                                            className="capitalize text-[19px] font-[500]" 
                                            href={projectItem.links.uiDesignLink} 
                                            target="_blank"
                                        >
                                            click here
                                        </a>
                                    </li>
                                    <li className="font-[600] text-[19px] uppercase">
                                        <span className="w-[150px] relative inline-block after:absolute after:right-3 after:content-[':']">
                                            skills
                                        </span>
                                        <div className="inline-flex flex-wrap">
                                            {
                                                projectItem.tags.map((tag,index) => (
                                                    <span
                                                        className="inline-block rounded-md text-white mr-2 px-2 py-[2px] uppercase text-[15px] font-medium bg-primary/70" 
                                                        key={index}>
                                                        {tag}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </Container>
        </section>
    )
}