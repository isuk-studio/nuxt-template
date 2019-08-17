![Nuxt Logo](https://id.nuxtjs.org/logos/nuxt-emoji@2x.png)

# About
This is nuxt template that used by isuk studio. We use
- Pug as our template language,
    
    pug file lint by pug-lint on save

- Post CSS as our preprocessor

    css file lint by Stylelint on save based on [Stylelint Config Standard](https://github.com/stylelint/stylelint-config-standard), we will use it until we found prope config


The js it self lint by ESlint using [Airbnb Style Guide](https://github.com/airbnb/javascript)

## Table of Content
* [Installation](#instalation)
    - [Prerequisite](#Prerequisite)
    - [Clone](#Clone)
    - [Installing Dependency](#Installing-Dependency)
    - [Running on Development](#Running-on-Development)
    - [Deployment](#Deployment)
* [Editor Setup](#Editor-Setup)
* [Style Guide](#Style-Guide)

<a name='installation'></a>
## Installation
There is 2 step of installation. First for the Code, Second for the editor. But before we fo further, Make sure you have meet the prerequisite

<a name='Prerequisite'></a>
### Prerequisite

- [Git](https://git-scm.com/)

    You can check git installation & version using

        $ git --version
        
    It will show :

        $ git version 2.20.1
    
    If you see something else it's means you did not installed or not installed it correctly)

- [Nodejs](http://nodejs.org) & NPM

    ***And we strongly recomend installing node & npm using [nvm](https://github.com/nvm-sh/nvm#installation-and-update) So you can change the node or npm version easily when it needed***

    Make sure Node that you're using is the latest LTS version or the version that has [latest End of Life](https://nodejs.org/en/about/releases/).


    You can check node version using

        $ node -v

    NPM ussually installed along with Nodejs, But make sure use version ^5.*

    You can check NPM version using  
        
        $ npm -v

- Code Editor ( VS Code, Sublime, Atom, etc.)

    But we recomend and insist you to use [Visual Studio Code](https://code.visualstudio.com)


<a name='Clone'></a>
### Clone
First you need to clone this repository first.

    git clone https://gitrepository.com/repository.git


<a name='Installing-Dependency'></a>
### Installing Dependency
After you finished clone the repository run

    $ npm install
  
Wait until it finished


<a name='Running-on-Development'></a>
### Running on Development
After dependency installation you now can run the server using

    $ npm run dev

Now your app available at http://localhost:3000. You can change port using `--port` argument

    $ npm run dev -- --port 8000

Now your app will run at port 8000 instead 3000 

<a name='Deployment'></a>
### Deployment

***N/A. Under Construction. Will add when we deploy it to staging***

<a name='Editor-Setup'></a>
## Editor Setup

There are plenty of extention for Visual Studio Code to help you code easily and quickly. So we recommend to you to install some extentions below :

- Vetur - Help you to code vue
- GitLens - Help you to know about commit easily
- ESLint - to make sure your code style is compliant with your .eslintrc.json
- Stylelint - to make sure your css style is compliant with your .stylelintrc.json
- puglint - to make sure your pug file is compliant with your .pug-lintrc.json

    if puglint not work instantly, try to enable it on the setting.
    ![Enable Puglint](https://res.cloudinary.com/isuk/image/upload/v1565848981/public-assets/Screen_Shot_2019-08-15_at_12.38.06_PM_bqybpy.png)

## Style Guide

Code with style guide will (absolutely) help programmer to more understand the code, increase readability, easy to understand, and kepp the uniformity.

### Javascript

We strictly use [Airbnb Style Guide](https://github.com/airbnb/javascript) for our javascript code


### CSS 
We try to lint our css file event it hard (We guess). Same like eslint, whenever error show up, the code will break.

We use [Stylelint Config Standard](https://github.com/stylelint/stylelint-config-standard) Here some of the guide
- Tab Type : Space
- Tab SIze : 2
- Closing Brace `}` indented same like the selector
- While class naming refer to [BEM](http://getbem.com/naming), The styling method refer to [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
- HEX color uppercase
- Never use ID as selector
- Use double quote `"` on string

### Pug

We have ourself pug style. Here some basic guide
- Tab Type is `space` with Size `4`
- No HTML text

        //- Invalid
        <strong>html text</strong>
        p this is <strong>html</strong> text

- Class and ID litteral 

        //- Invalid
        input(class='text')

        //- Valid
        input.class
        input#id
        
- Class and id litteral after attribute

        //- Invalid
        input.class(type='text')

        //- Valid
        input(type='text').class
        input(type='text')#id

- No Duplicate Attribute

        //- Invalid
        div(a='a' a='b')

        //- Valid
        div(a='a', b='b')

For more information, you can check `.pug-linrc.json` and [pug-lint rule](https://github.com/pugjs/pug-lint/blob/master/docs/rules.md)