// model
const model = {
    cats: [
        { name: "Marvel Universe", image: "marvel6.jpg", clicks: 0 },
        { name: "Guardians of the Galaxy", image: "marvel5.jpg", clicks: 0 },
        { name: "Black Spider-Man", image: "marvel4.jpg", clicks: 0 },
        { name: "Fantastic Four", image: "marvel8.jpg", clicks: 0 },
        { name: "Venom", image: "marvel10.jpg", clicks: 0 }
    ]
};

//view
const view = {
    catList: document.querySelector("#cats"),
    display: document.querySelector("#display"),
    admin: document.querySelector("#admin"),
    inputName: "",
    inputImage: "",
    inputClicks: 0,

    listenForm: function() {
        document
            .querySelector("#form")
            .addEventListener("submit", this.onSubmit);
    },

    nameChange: function(name) {
        this.inputName = name;
    },

    imageChange: function(source) {
        this.inputImage = source;
    },

    clicksChange: function(clicks) {
        this.inputClicks = clicks;
    },

    onSubmit: function(e) {
        e.preventDefault();
        const newCat = {
            name: view.inputName,
            image: view.inputImage,
            clicks: view.inputClicks
        };
        const oldName = display.childNodes[0].childNodes[0].textContent;
        console.log(newCat);
        octopus.changeCat(oldName, newCat);
        view.clearForm();
    },

    clearForm: function() {
        this.inputName = "";
        this.inputImage = "";
        this.inputClicks = 0;
    },

    showAdmin: function() {
        this.admin.style.display = "block";
    },

    hideAdmin: function() {
        this.admin.style.display = "none";
    },

    renderListItem: function(cat) {
        const li = document.createElement("li");
        li.classList.add("pointer");
        li.classList.add("list-group-item");
        li.textContent = cat.name;
        li.addEventListener("click", e => {
            this.renderCat(octopus.findCat(e.target.textContent));
        });
        this.catList.append(li);
    },

    renderCat: function(cat) {
        // Create elements for display area
        let name = this.renderName(cat);
        let image = this.renderImage(cat);
        let counter = this.renderClicks(cat);
        this.clearCat();
        const div = document.createElement("div");
        div.append(name);
        div.append(image);
        div.append(counter);
        display.append(div);
    },

    renderClicks: function(cat) {
        const counter = document.createElement("h3");
        counter.innerHTML = `Clicks: <span>${cat.clicks}</span>`;
        return counter;
    },

    renderImage: function(cat) {
        const image = document.createElement("img");
        image.setAttribute("src", cat.image);
        image.classList.add("pointer");
        image.addEventListener("click", () => {
            octopus.increament(cat);
        });
        return image;
    },

    renderName: function(cat) {
        const name = document.createElement("h1");
        name.textContent = cat.name;
        return name;
    },

    clearCat: function() {
        display.innerHTML = "";
    },

    clearList: function() {
        this.catList.innerHTML = "";
    }
};

//octopus

const octopus = {
    init: function() {
        this.initList(model.cats);
        view.hideAdmin();
        view.listenForm();
    },

    initList: function(cats) {
        view.clearList();
        for (cat of cats) {
            view.renderListItem(cat);
        }
    },

    findCat: function(name) {
        for (cat of model.cats) {
            if (cat.name === name) {
                return cat;
            }
        }
        return null;
    },

    increament: function(currentCat) {
        for (cat of model.cats) {
            if (cat === currentCat) {
                cat.clicks++;
                view.renderCat(cat);
                break;
            }
        }
    },

    changeCat: function(oldName, newCat) {
        for (let i = 0; i < model.cats.length; i++) {
            if (model.cats[i].name === oldName) {
                model.cats[i] = newCat;
                view.renderCat(model.cats[i]);
                this.initList(model.cats);
            }
        }
    }
};

octopus.init();
 
 
 
 
 
 
 
 
 /*Later method var model = {
    pic:function {
        constructor(name,picture,clicks = 0) {
         this.name = name;
         this.picture = picture;
         this.clicks = clicks;   
        }
       }
        pic1: new pic("Guardians of Galaxy", "marvel4.jpg" ),
        pic2: new pic("Marvel Universe", "marvel5.jpg"),
        pic3: new pic("Black Spider-Man", "marvel6.jpg"),
       
       // List of all pics;
     pics: = [pic1, pic2, pic3];   
}
var view = {
    init: function() {

    }

}

var octupus = {
 getCats: 
}
/*
// display picture list & select left column in dom
const leftColumn = document.querySelector(".col-4");
// Construct pic list
const ul = document.createElement('ul');
for(let pics of pic) {
    const li = document.createElement("li");
    li.textContent = cat.name;
    ul.appendChild(li);
}
leftColumn.appendChild(ul);

// add an admin button
const adminBtn = document.createElement("button");
adminBtn.textContent = "Add New Pic";
adminBtn.className = "btn btn-danger mt-3";
adminBtn.addEventListener("click", this.showform);

// Easier method used above
/*
const pic1 = {
    name: "Avengers",
    picture: "marvel4.jpg",
    clicks: 0,
}

const pic2 = {
    name: "Marvel Universe",
    picture: "marvel5.jpg",
    clicks: 0,
}

const pic3 = {
    name: "Black Spider-Man",
    picture: "marvel6.jpg",
    clicks: 0,
}
*/
/* Apart of earlier method
const pic1Container = document.querySelector("#pic-1");
const pic2Container = document.querySelector("#pic-2");
const pic3Container = document.querySelector("#pic-3");

const pic1Name = document.createElement("h1");
pic1Name.textContent = pic1.name;
*/

//My first method
   /*  let i = 0;
   function buttonClick() {
       document.getElementById('corp').value = ++i;
   }
   let x = 0;
   function buttonClick2() {
       document.getElementById('inc').value = ++x;
   }
   let y = 0;
   function buttonClick3() {
       document.getElementById('merch').value = ++y;
   }
   */

  //ANOTHER METHOD 
//selct image
   // const cat = document.QuerySelector("img")
//counter for counting clicks
   //let counter = 0;
   //const cat = document.QuerySelector("click")

   /* cat.addEventListener("click", ()=>{
       counter++;
       click.
   }
*/

// ES6 Method 
/* const comic1 ={
    name: "anna",
    picture:"marvel.jpeg",
    clicks: 0
} */
 /* const comic1container=document.querySelector                 */
 // const comic1 =  document.createElement
 //comic1.textContent=comic1.name
  
 /* const comic1 = {
     name:"Black Spiderman",
     picture:"cat.comic.jpg",
     clicks:0
 }
  const comic2 = {
     name:"Avengers",
     picture:"cat.comic2.jpg",
     clicks:0
 }
 */
  //make the cast as a list
// const cats =[cat1,cat2]
  //Using loop to add eventListener on everycat in the list
/* for (cat of cats){
    cat.addEventListener()
}
*/