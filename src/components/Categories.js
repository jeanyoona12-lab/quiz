

const Categories = ({Categories,onSelect}) => {
    console.log( Categories );
    return (
        <div id="categoies">
            <h2>주제를 선택하세요</h2>
            <ul>
                { Categories.map((item,idx)=>{
                    return(
                    <li key={idx}
                        onClick={()=>{onSelect(item)}}>{item}</li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default Categories;
