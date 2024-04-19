const mobileFooterWhenClicked = document.querySelector('.mobile-share');
const desktopTooltip = document.querySelector('.tooltip-content');
const footer = document.querySelector('.default');

const defaultBtn = document.getElementById('default-btn');
const mobileBtn = document.getElementById('mobile-btn');

defaultBtn.addEventListener('click', () => {
    const currentWidth = window.innerWidth;

    if (currentWidth < 1000) {
        console.log('mobile');
        mobileFooterWhenClicked.style.display = 'flex';
        footer.style.display = 'none';
    } else {
        const desktopTooltipDisplay = window.getComputedStyle(desktopTooltip).display;
        if (desktopTooltipDisplay === 'none') {
            desktopTooltip.style.display = 'flex';
        } else {
            desktopTooltip.style.display = 'none';
        }
    }
});
 
mobileBtn.addEventListener('click', () => { 
    mobileFooterWhenClicked.style.display = 'none';
    footer.style.display = 'flex';
});

window.addEventListener('resize', () => { 
    const currentWidth = window.innerWidth;

    if (currentWidth < 1000) {
        const desktopTooltipDisplay = window.getComputedStyle(desktopTooltip).display;
        if (desktopTooltipDisplay === 'flex') {
            desktopTooltip.style.display = 'none';
            footer.style.display = 'none';
            mobileFooterWhenClicked.style.display = 'flex';
        }
    } else {
        const mobileFooterWhenClickedDisplay = window.getComputedStyle(mobileFooterWhenClicked).display;
        if (mobileFooterWhenClickedDisplay === 'flex') {
            mobileFooterWhenClicked.style.display = 'none';
            footer.style.display = 'flex';
            desktopTooltip.style.display = 'flex';
        }
    }
});