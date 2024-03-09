

const getOne = elemName => document.querySelector(elemName);
const getAll = elemName => document.querySelectorAll(elemName);


const searchBox = getOne('.search__box ')
const search = getOne('.search')
const searchResult = getOne('.search__result')
const searchResultList = getOne('.search__result ul')


const getLinks = () =>  getAll(hyperlink)

const showMatchingLinks = (links) => {    
    for (let link of links) {
        // Create a new list
        const li = document.createElement('li')
        
        // Append link to the new list
        
        li.append(link)

        // Append list to SearchResultList
        searchResultList.appendChild(li)
    }
}

const getMatchingLinks = (keyword) => {
    const hyperlinkTag = 'details a'
    const links = []
    
    for (link of getAll(hyperlinkTag)) {
        if(link.textContent.toLowerCase().includes(keyword.toLowerCase()) 
            && !links.includes(link)) {
            links.push(link.cloneNode(true))
        }
    }
    console.log(links)
    return links
}

// console.log(getAll[0])

searchBox.addEventListener(
    'focus',
    () => {
        // Change Search Box Color to green
        searchBox.style.borderColor = 'green'

        // Hide Search Result
        searchResultList.classList.remove('hide')
    })

searchBox.addEventListener(
    'blur',
    () => {
        // Change Search Box Color to black
        searchBox.style.borderColor = 'black'
    })


searchBox.addEventListener('input',
() => {

    // Show Search Result
    searchResult.classList.remove('hide')

    // if match exists
    const links = getMatchingLinks(searchBox.value)
    const isMatchingLinkExists = links.length > 0 ? true : false
    const isTextboxEmpty = searchBox.value.length > 0 ? false : true 

    // Empty Search Result
    searchResultList.innerHTML = `<li class="no-result-container hide">
    <span class="no-result">No Result</span> </li>`
    
    if(isTextboxEmpty) {
        console.log('Textbox is empty')
        // Hide Search Result
        searchResult.classList.add('hide')
        return
    } else {
        // Remove Search Result
        searchResult.classList.remove('hide')
    }

    if (isMatchingLinkExists) {
        // Show search__result
        showMatchingLinks(links)     
    } else {
        // show no result
        getOne('.no-result-container').classList.remove('hide')
    }
        // else 
        // Show No Result
})

