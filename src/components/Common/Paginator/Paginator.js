import React, {useState} from "react";
import styles from '../../All.module.css'
import cn from "classnames"

let Paginator = ({totalItemsCount, pageSize = 100, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    const Paginator = (<div className={styles.paginator}>
        {
            portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}> Previous </button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, indx) => {
                return (
                    <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                          onClick={(e) => {
                              onPageChanged(p, indx)
                          }}>
                                {p}
                            </span>
                )
            })}

        {
            portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}> Next </button>
        }

    </div>)

    return pagesCount != 1 ? Paginator : null
}
export default Paginator