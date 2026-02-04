
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';

import canva from '../app/assets/svg/skills/canva.svg';

import css from '../app/assets/svg/skills/css.svg';

import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';

import html from '../app/assets/svg/skills/html.svg';

import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';

import lightroom from '../app/assets/svg/skills/lightroom.svg';

import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';

import photoshop from '../app/assets/svg/skills/photoshop.svg';
;
import react from '../app/assets/svg/skills/react.svg';

import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import git from '../app/assets/svg/skills/git.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {

    case 'html':
      return html;
    case 'photoshop':
      return photoshop;

   
    case 'css':
      return css;

    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
   
    case 'react':
      return react;
  
    case 'typescript':
      return typescript;
   
    case 'bootstrap':
      return bootstrap;
   
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
   
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
   
    case 'java':
      return java;
    
    case 'firebase':
      return firebase;
   
    case 'git':
      return git;
   
    case 'lightroom':
      return lightroom;
   
  
    case 'figma':
      return figma;
   
    case 'canva':
      return canva;
    default:
      break;
  }
}
