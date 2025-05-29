let tabButton = document.querySelectorAll('.topNavInner');
let tabContent = document.querySelectorAll('.tab-pane');

function tabActiveEvent(input) {
    tabButton.forEach((x,index)=>{
        tabButton[index].classList.remove('active');
        tabContent[index].classList.remove('show');
    });

    let activeTab = document.getElementById(input + 'Block');
    activeTab.classList.add('active');
    let contentTab = document.getElementById(input + 'BlockContent');
    contentTab.classList.add('show');
}



let resumeBtn =  document.querySelectorAll("#resumeBtn")
resumeBtn.forEach((e)=>{
    e.addEventListener("click", function(){
        document.getElementById("cvBlockMain").classList.toggle('show')
    });
})