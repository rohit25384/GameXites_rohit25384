
// Geting the theme button 
const themeButton = document.getElementById('theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');

// Check what theme
let currentTheme = localStorage.getItem('theme');
if (!currentTheme) {
    currentTheme = 'dark';
}
// Initially
applyTheme(currentTheme);

// condition for button
themeButton.addEventListener('click', function() {
    if (currentTheme === 'dark') {
        currentTheme = 'light';
    } else {
        currentTheme = 'dark';
    }
    
    localStorage.setItem('theme', currentTheme);
    
    applyTheme(currentTheme);
});

// Func to apply theme 
function applyTheme(theme) {
    if (theme === 'dark') {
        applyDarkMode();
    } else {
        applyLightMode();
    }
}

// Dark Mode colors
function applyDarkMode() {
    //body
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    
    //sidebar
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.backgroundColor = 'rgb(33, 32, 32)';
    
    //main bar
    let mainBar = document.querySelector('.main_bar');
    mainBar.style.backgroundColor = 'rgb(33, 32, 32)';
    
    // search input
    let searchInput = document.querySelector('.search input');
    searchInput.style.color = '#ffffff';
    
    //  news cards
    let newsCards = document.querySelectorAll('.news_card');
    for (let i = 0; i < newsCards.length; i++) {
        newsCards[i].style.backgroundColor = 'rgb(33, 32, 32)';
    }
    // game cards
    let gameCards = document.querySelectorAll('.game_card');
    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].style.backgroundColor = 'rgb(33, 32, 32)';
    }
    // event cards
    let eventCards = document.querySelectorAll('.event_card');
    for (let i = 0; i < eventCards.length; i++) {
        eventCards[i].style.backgroundColor = 'rgb(33, 32, 32)';
    }

    // navigation
    let navigation = document.querySelectorAll('.nav ul li');
    for (let i = 0; i < navigation.length; i++) {
        navigation[i].style.backgroundColor = 'rgb(33, 32, 32)';
    }

    //footer
    let footer = document.querySelector('.footer');
    footer.style.backgroundColor = 'rgb(33, 32, 32)';
    
    // footer social icons
    let footerIcons = document.querySelectorAll('.footer-right a');
    for (let i = 0; i < footerIcons.length; i++) {
        footerIcons[i].style.background = 'rgb(42, 42, 42)';
    }
    
    // inverting footer icons
    let footerIconsv = document.querySelectorAll('.footer-right a img');
    for (let i = 0; i < footerIconsv.length; i++) {
        footerIconsv[i].style.filter = 'invert(85%)';
    }   
    
    // text elements
    let allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (let i = 0; i < allHeadings.length; i++) {
        allHeadings[i].style.color = '#ffffff';
    }
    
    let allParagraphs = document.querySelectorAll('p');
    for (let i = 0; i < allParagraphs.length; i++) {
        allParagraphs[i].style.color = '#ffffff';
    }
    
    //navigation links
    let navLinks = document.querySelectorAll('.nav ul li a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#ffffff';
    }
    
    //profile link
    let profileLink = document.querySelector('.profile a h3');
    if (profileLink) {
        profileLink.style.color = '#ffffff';
    }
    
    //game card
    let gameLinks = document.querySelectorAll('.game_card a');
    for (let i = 0; i < gameLinks.length; i++) {
        gameLinks[i].style.color = '#ffffff';
    }
    
    //news
    let newsHeadings = document.querySelectorAll('.news_info h3');
    for (let i = 0; i < newsHeadings.length; i++) {
        newsHeadings[i].style.color = '#ffffff';
    }
    
    let newsParagraphs = document.querySelectorAll('.news_info p');
    for (let i = 0; i < newsParagraphs.length; i++) {
        newsParagraphs[i].style.color = '#ffffff';
    }
    
    //event
    let eventHeadings = document.querySelectorAll('.event_info h3');
    for (let i = 0; i < eventHeadings.length; i++) {
        eventHeadings[i].style.color = '#ffffff';
    }
    
    let eventParagraphs = document.querySelectorAll('.event_info p');
    for (let i = 0; i < eventParagraphs.length; i++) {
        eventParagraphs[i].style.color = '#ffffff';
    }
    
    //button icon to sun
    toggleIcon.textContent = '☀️';
    
    //button color
    themeButton.style.borderColor = '#ad2f2f';
    themeButton.style.color = '#ffffff';
}

// Apply Light Mode colors
function applyLightMode() {
    //body
    document.body.style.backgroundColor = '#F9DFDF';
    document.body.style.color = '#000000ff';
    
    //sidebar
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.backgroundColor = '#FCF8F8';
    
    //main bar
    let mainBar = document.querySelector('.main_bar');
    mainBar.style.backgroundColor = '#FCF8F8';
    
    //search input
    let searchInput = document.querySelector('.search input');
    searchInput.style.color = '#000000ff';

    // game cards
    let gameCards = document.querySelectorAll('.game_card');
    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].style.backgroundColor = '#F9DFDF';
    }
    
    // news cards
    let newsCards = document.querySelectorAll('.news_card');
    for (let i = 0; i < newsCards.length; i++) {
        newsCards[i].style.backgroundColor = '#F9DFDF';
    }
    
    //event cards
    let eventCards = document.querySelectorAll('.event_card');
    for (let i = 0; i < eventCards.length; i++) {
        eventCards[i].style.backgroundColor = '#F9DFDF';
    }

    // navigation
    let navigation = document.querySelectorAll('.nav ul li');
    for (let i = 0; i < navigation.length; i++) {
        navigation[i].style.backgroundColor = '#F9DFDF';
    }

    //footer
    let footer = document.querySelector('.footer');
    footer.style.backgroundColor = '#FCF8F8';
    
    // footer social icons
    let footerIcons = document.querySelectorAll('.footer-right a');
    for (let i = 0; i < footerIcons.length; i++) {
        footerIcons[i].style.background = '#F9DFDF';
    }
    
    let footerIconsv = document.querySelectorAll('.footer-right a img');
    for (let i = 0; i < footerIconsv.length; i++) {
        footerIconsv[i].style.filter = 'invert(10%)';
    }   
    
    // text elements
    let allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (let i = 0; i < allHeadings.length; i++) {
        allHeadings[i].style.color = '#000000ff';
    }
    
    let allParagraphs = document.querySelectorAll('p');
    for (let i = 0; i < allParagraphs.length; i++) {
        allParagraphs[i].style.color = '#000000ff';
    }
    
    // navigation links
    let navLinks = document.querySelectorAll('.nav ul li a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#000000ff';
    }
    
    //profile link
    let profileLink = document.querySelector('.profile a h3');
    if (profileLink) {
        profileLink.style.color = '#000000ff';
    }
    
    //game card links
    let gameLinks = document.querySelectorAll('.game_card a');
    for (let i = 0; i < gameLinks.length; i++) {
        gameLinks[i].style.color = '#000000ff';
    }
    
    // news
    let newsHeadings = document.querySelectorAll('.news_info h3');
    for (let i = 0; i < newsHeadings.length; i++) {
        newsHeadings[i].style.color = '#000000ff';
    }
    
    let newsParagraphs = document.querySelectorAll('.news_info p');
    for (let i = 0; i < newsParagraphs.length; i++) {
        newsParagraphs[i].style.color = '#000000ff';
    }
    
    //event
    let eventHeadings = document.querySelectorAll('.event_info h3');
    for (let i = 0; i < eventHeadings.length; i++) {
        eventHeadings[i].style.color = '#000000ff';
    }
    
    let eventParagraphs = document.querySelectorAll('.event_info p');
    for (let i = 0; i < eventParagraphs.length; i++) {
        eventParagraphs[i].style.color = '#000000ff';
    }
    
    // button icon to moon
    toggleIcon.textContent = '🌙';
    
    //button color
    themeButton.style.borderColor = '#ad2f2f';
    themeButton.style.color = '#000000ff';
}