"use strict";

import './store/store';
import 'alpinejs';
import { env } from './libs/utils/constants';
import { initPageLoader } from './libs/components/pageloader';
import { openTab } from "./libs/components/setupInstrucions";
import { switchDemoImages, insertBgImages, initModals } from './libs/utils/utils';
import { initNavbar } from './libs/components/navbar';
import { initBackToTop } from './libs/components/backtotop';
import { getTableData } from './libs/components/fetch';
const feather = require('feather-icons');

window.initNavbar = initNavbar;
window.initBackToTop = initBackToTop;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages(env);

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();
        
        // Add modal windows
        const modals = initModals();

        //Fetch table data
        const daata = getTableData();
        
        //Handle Setup instructions tabs
        const instructionTabs = openTab();
    }
}

