const Categories = ({Categories,onSelect}) => {
    console.log( Categories );
    return (
        <div id="categoies">
            <ul>
                { Categories.map((item,idx)=>{
                    return(
                    <li key={idx}
                        className={`category-item item-${idx} stack-card`}
                        onClick={()=>{onSelect(item)}}><p>{item}</p></li>
                    )
                    
                })
            }
        </ul>
    </div>
    )
}

export default Categories;