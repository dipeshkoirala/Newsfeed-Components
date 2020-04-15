const panelData = [
  {
    title: "First Panel",
    content:
      "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne.",
  },

  {
    title: "Second Panel",
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
  },
  {
    title: "Third Panel",
    content:
      "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital.",
  },
  {
    title: "Fourth Panel",
    content:
      "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die.",
  },
  {
    title: "Fifth Panel",
    content:
      "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die.",
  },
];

/* 
  <div class="panel">
  
    <div class="panel-bar">
    
      <h3>Title of Panel</h3>
      
      <div class="panel-buttons">
        <button class="panel-btn-open">&#9660</button>
        <button class="panel-btn-close hide-btn">Close</button>
      </div>
      
    </div>
    
    <div class="panel-content">
      Content of panel
    </div>
    
  </div>
  */

// .createElement

// .appendChild or .prepend

// .classList

// .textContent

function panelComponentCreator(titleData, contentData) {
  const panel = document.createElement("div");
  panel.classList.add("panel");

  // panel bar
  const panelBar = document.createElement("div");
  panelBar.classList.add("panel-bar");

  const title = document.createElement("h3");
  title.textContent = titleData;

  const panelButtons = document.createElement("div");
  panelButtons.classList.add("panel-buttons");

  const openButton = document.createElement("button");
  openButton.classList.add("panel-btn-open");
  openButton.textContent = "\u25bc";

  const closeButton = document.createElement("button");
  closeButton.classList.add("panel-btn-close", "hide-btn");
  closeButton.textContent = "\u25b2";

  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);

  // if open we want the content to appear
  // if closed we want the content to disappear

  panelBar.appendChild(title);
  panelBar.appendChild(panelButtons);

  //panel content
  const panelContent = document.createElement("div");
  panelContent.classList.add("panel-content");
  panelContent.textContent = contentData;

  panel.appendChild(panelBar);
  panel.appendChild(panelContent);

  panelButtons.addEventListener("click", (event) => {
    console.log(event.target);
    openButton.classList.toggle("hide-btn");
    closeButton.classList.toggle("hide-btn");
    panelContent.classList.toggle("toggle-on");
  });

  return panel;
}

const accordion = document.querySelector(".accordion");
// const firstPanel = panelComponent(panelData[0].title, panelData[0].content)
// const secondPanel = panelComponent(panelData[1].title, panelData[1].content);

// accordion.appendChild(firstPanel)
// accordion.appendChild(secondPanel)

panelData.forEach((panelObj) => {
  const panelComponent = panelComponentCreator(
    panelObj.title,
    panelObj.content
  );
  console.log(panelComponent);
  accordion.appendChild(panelComponent);
});
