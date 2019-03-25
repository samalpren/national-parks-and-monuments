const listNationalMonuments = () => {
  getAllMonuments().then(monumentsArray => {
    console.log(monumentsArray)
    let monumentsFragment = document.createDocumentFragment();

    monumentsArray.forEach(monument => {
      let monumentHtml = buildMonHtml(monument);
      // console.log(monumentsFragment)
      monumentsFragment.appendChild(monumentHtml);
    });

    const nationalMonumentsSection = document.querySelector("#national--monuments");
    clearElement(nationalMonumentsSection)
    nationalMonumentsSection.appendChild(monumentsFragment)
  });
};