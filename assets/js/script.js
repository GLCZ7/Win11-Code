function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;

    if (hours < 12) {
        timeString += ' AM';
    } else {
        timeString += ' PM';
    }

    document.getElementById('clockTime').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");

let isStartMenuVisible = false;

startButton.addEventListener("click", (e) => {
    e.stopPropagation(); 
    if (isStartMenuVisible) {
        hideStartMenu();
    } else {
        showStartMenu();
        document.body.addEventListener("click", hideStartMenu);
    }
});

function showStartMenu() {
    startMenu.style.transform = "translateY(0)";
    isStartMenuVisible = true;
}

function hideStartMenu() {
    if (!startMenu.contains(event.target)) {
        startMenu.style.transform = "translateY(120%)";
        isStartMenuVisible = false;
        document.body.removeEventListener("click", hideStartMenu);
    }
}



const poweroffButton = document.getElementById("poweroff"); 
const smallStartmenu = document.getElementById("smallStartmenu");

let isSmallStartMenuVisible = false;

poweroffButton.addEventListener("click", (e) => {
    e.stopPropagation(); 
    if (!isSmallStartMenuVisible) {
        smallStartmenu.style.display = "block";
        isSmallStartMenuVisible = true;

        document.body.addEventListener("click", hideSmallStartMenu);
    } else {
        hideSmallStartMenu();
    }
});

function hideSmallStartMenu() {
    smallStartmenu.style.display = "none";
    isSmallStartMenuVisible = false;
    document.body.removeEventListener("click", hideSmallStartMenu);
}


// Lấy tất cả các phần tử .appImg
const appImages = document.querySelectorAll('.appImg');

// Gán sự kiện click cho thanh tìm kiếm
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', searchApps);

function searchApps() {
    const searchText = searchInput.value.toLowerCase();

    appImages.forEach(appImage => {
        const appName = appImage.querySelector('.recAppName').textContent.toLowerCase();

        if (appName.includes(searchText)) {
            appImage.style.display = 'flex';
        } else {
            appImage.style.display = 'none';
        }
    });
}


const apps = document.querySelectorAll('.appImg');
const noAppsFound = document.getElementById('noAppsFound');


const searchBox = document.querySelector('.search-box input');

searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.toLowerCase();
    let foundApps = 0;

    apps.forEach((app) => {
        const appName = app.querySelector('.recAppName').textContent.toLowerCase();
        if (appName.includes(searchTerm)) {
            app.style.display = 'flex';
            foundApps++;
        } else {
            app.style.display = 'none';
        }
    });


    if (foundApps === 0) {
        noAppsFound.textContent = `No result found for '${searchBox.value}'`;
        noAppsFound.style.display = 'block';
    } else {
        noAppsFound.style.display = 'none';
    }
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    document.body.style.display = "none";
    const notification = document.getElementById("notification");
    notification.style.display = "block";
} else {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
}