import displayPage from './modules/displayPage.js';
import { DateTime } from './modules/luxon.js';
import loadPage from './modules/loadPage.js';

/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

document.getElementById('time').innerHTML = DateTime.now();

document.getElementById('displayPage_list').addEventListener('click', () => displayPage('list'));
document.getElementById('displayPage_form').addEventListener('click', () => displayPage('form'));
document.getElementById('displayPage_contact').addEventListener('click', () => displayPage('contact'));

loadPage();