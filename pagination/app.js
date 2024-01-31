const pageNumbers = document.querySelector(".pageNumbers");
const paginationList = document.getElementById("paginationList");
const listItems = paginationList.querySelectorAll("li");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const contentLimit = 10;
//logic to find the total page count :
const pageCount = Math.ceil(listItems.length / contentLimit);
let currentPage = 1;



//code to generate page number list based on items and content limit per page : 
const displayPageNumbers = (index) => {
    const pageNumber = document.createElement("a");
    pageNumber.innerText = index;
    pageNumber.setAttribute('href', "#");
    pageNumber.setAttribute("index", index);
    pageNumbers.appendChild(pageNumber);
}
const getPageNumbers = () => {
    for(let i = 1; i <= pageCount; i++) {
        displayPageNumbers(i);
    };
};



// code for disable and enable the next and prev buttons : 
const disableButton = (button) => { 
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}
const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled")
}

const controlButtonsStatus = () => {
    if(currentPage == 1) {
        disableButton(prevButton); 
    } else {
        enableButton(prevButton);
    };

    if(pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    };
};



//Hightlight the current page number : 
const handleActivePageNumber = () => {
    document.querySelectorAll("a").forEach((button) => {
        button.classList.remove('active');
        const pageIndex = Number(button.getAttribute('index'))
        if(pageIndex == currentPage) {
            button.classList.add('active');
        }
    });
};



//show only ten list items and hide all other items :
const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    controlButtonsStatus();

    const prevRange = (pageNum -1) * contentLimit;
    const nextRange = pageNum * contentLimit;

    listItems.forEach((item, index) =>{
        item.classList.add("hidden");
        if(index >= prevRange && index < nextRange) {
            item.classList.remove("hidden");
        }
});
};


window.addEventListener("load", () => {
    getPageNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll("a").forEach((button) => {
        const pageIndex = Number(button.getAttribute('index'));

        if(pageIndex){
            button.addEventListener('click', () => {
                setCurrentPage(pageIndex);
            })
        }
    });
});

