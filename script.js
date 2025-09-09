
  const env = document.getElementById("heartEnv");
  env.addEventListener("click", ()=>{
    env.classList.toggle("open");
    if(env.classList.contains("open")){
      for(let i=0;i<10;i++){
        let h=document.createElement("div");
        h.className="heart";
        h.style.left=Math.random()*100+"%";
        h.style.animationDuration=(3+Math.random()*2)+"s";
        env.appendChild(h);
        setTimeout(()=>h.remove(),5000);
      }
    }
  });