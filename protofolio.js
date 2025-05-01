const toggle = document.getElementById('blc')
const body = document.querySelector('body')
const Sec =document.getElementById('sc1')
const headBar = document.getElementById('head-bar')
const Navbar = document.getElementById('nav')
const Navbar1 = document.getElementById('nav1')
const Navbar2 = document.getElementById('nav2')
const Navbar3 = document.getElementById('nav3')
const Headtext = document.getElementById('header-text')
let progress = document.getElementById('scrollprogg')
const Aboutme = document.getElementById('aboutme')

let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressheight = (document.documentElement.scrollTop / totalheight) * 100 // window.pageYOFFset
    progress.style.height = progressheight + "%"
} 

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.backgroundColor = '#191A19';
        body.style.transition = '0.6s';
        headBar.style.backgroundColor = '#191A19';
        headBar.style.transition = '0.6s';
        headBar.style.boxShadow = '2px 2px 20px #00ec00';
        Headtext.style.color = "whitesmoke"
        Sec.style.color= 'whitesmoke';
        Sec.style.transition = '0.6s';
        Navbar.style.color = 'whitesmoke'
        Navbar1.style.color = 'whitesmoke'
        Navbar2.style.color = 'whitesmoke'
        Navbar3.style.color = 'whitesmoke'
        Navbar.style.transition = '0.6s'
        Navbar1.style.transition = '0.6s'
        Navbar2.style.transition = '0.6s'
        Navbar3.style.transition = '0.6s'
    }

    
    else{
        body.style.backgroundColor = 'whitesmoke';
        body.style.transition = '0.6s';
        Sec.style.color = 'black';
        headBar.style.backgroundColor = 'whitesmoke';
        headBar.style.boxShadow = '2px 2px 20px black';
        headBar.style.transition = '0.6s';
        Headtext.style.color = "black"
        Navbar.style.color = 'black'
        Navbar1.style.color = 'black'
        Navbar2.style.color = 'black'
        Navbar3.style.color = 'black'
        Navbar.style.transition = '0.6s'
        Navbar1.style.transition = '0.6s'
        Navbar2.style.transition = '0.6s'
        Navbar3.style.transition = '0.6s'
    }
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach( (entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenelements = document.querySelectorAll('.hide');
hiddenelements.forEach( (el) =>  observer.observe(el) );