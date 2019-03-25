const buildMonHtml = monumentObject => {

  const monArticle = buildElement("article");
  monArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
  monArticle.appendChild(buildElement("p", undefined, monumentObject.state));
  monArticle.appendChild(buildElement("p", undefined, monumentObject.area));
  monArticle.appendChild(buildElement("p", undefined, monumentObject.dateEstablished));


  let deleteMonButton = buildElement("button", `delete-mon--${monumentObject.id}`, "Delete Monument");
  monArticle.appendChild(deleteMonButton);
  deleteMonButton.addEventListener("click", monDelete)
  return monArticle;
};