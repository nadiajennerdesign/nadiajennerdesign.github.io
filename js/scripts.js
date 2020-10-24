    if (document.body.classList.contains('index')){
       
        document.querySelector('.conttwo').addEventListener('click', function(){
            $("div.conttwo").css('visibility', 'hidden');
            $("div.contfour").css('visibility', 'visible');
        });

        document.querySelector('.contfour').addEventListener('click', function(){
            $("div.contfour").css('visibility', 'hidden');
            $("div.conttwo").css('visibility', 'visible');
        });

        document.querySelector('.contonehome').addEventListener('click', function(){
            $("div.contfour").css('visibility', 'visible');
            $("div.conttwo").css('visibility', 'visible');
        });
        
        document.querySelector('.background').addEventListener('click', function(){
            $("div.contfour").css('visibility', 'visible');
            $("div.conttwo").css('visibility', 'visible');
        });

        document.querySelector('.contfive').addEventListener('click', function() {
                  document.querySelector('.contfive').classList.toggle('expand');
                  document.querySelector('.contfiveimg').classList.toggle('expand');
                  document.querySelector('.contsix').classList.toggle('expand');
            });

        document.querySelector('.typefaceapologeticsicon').addEventListener('click', function() {
            document.querySelector('.typefaceapologeticstext').classList.toggle('expand');
            document.querySelector('.typefaceapologeticscover').classList.toggle('expand');
        });
        
        var music = document.getElementById("music");
        var isPlaying = false;
        music.volume = 0.2;
        function togglePlay() {
            if (isPlaying) {
                music.pause()
            } else {
                music.play();
            }
        };
        music.onplaying = function() {
            isPlaying = true;
            $("#volumeiconmute").hide();
            $("#volumeiconon").show();
        };
        music.onpause = function() {
            isPlaying = false;
            $("#volumeiconmute").show();
            $("#volumeiconon").hide();
        };
        
    }

    if (document.body.classList.contains('poemscraps')){
        
        document.querySelector('.overlaybuttonone').addEventListener('click', function() {
            document.querySelector('.overlayone').classList.toggle('expand');
            document.querySelector('.overlaybuttonone').classList.toggle('expand');
            document.querySelector('.overlaybuttontwo').classList.toggle('expand');

        });
        
        document.querySelector('.overlaybuttontwo').addEventListener('click', function() {
            document.querySelector('.overlaytwo').classList.toggle('expand');
            document.querySelector('.overlaybuttontwo').classList.toggle('expand');
            document.querySelector('.overlaybuttonone').classList.toggle('expand');

        });
        
        document.querySelector('.overlayexitone').addEventListener('click', function() {
            document.querySelector('.overlayone').classList.toggle('expand');
            document.querySelector('.overlaybuttonone').classList.toggle('expand');
            document.querySelector('.overlaybuttontwo').classList.toggle('expand');
        });
        
        document.querySelector('.overlayexittwo').addEventListener('click', function() {
            document.querySelector('.overlaytwo').classList.toggle('expand');
            document.querySelector('.overlaybuttonone').classList.toggle('expand');
            document.querySelector('.overlaybuttontwo').classList.toggle('expand');
        });
            
    }
    if (document.body.classList.contains('logorain')){
        
            function myphysics(x) {
              if (x.matches) {
                window.addEventListener('load', function() {
	
                    var canvas = document.getElementById('world');


                    var engine = Matter.Engine.create();
                    var world = engine.world;
                    var render = Matter.Render.create({
                        canvas: canvas,
                        engine: engine,
                        options: {
                            width: window.innerWidth,
                            height: window.innerHeight,
                            background: 'transparent',
                            wireframes: false,
                            showAngleIndicator: false
                        }
                    });

                    function percentX(percent) {
                      return Math.round(percent/100 * window.innerWidth);
                    }
                    function percentY(percent) {
                      return Math.round(percent/100 * window.innerHeight);
                    }

                    var logoone = Matter.Bodies.circle(percentX(10), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                width:100,
                                    sprite: {
                                        texture: './Images/logos/logo-resize-15.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoone);
                    var logotwo = Matter.Bodies.circle(percentX(20), percentY(1), 50,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-16.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logotwo);
                    var logothree = Matter.Bodies.circle(percentX(30), percentY(1), 50,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-17.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logothree);
                    var logofour = Matter.Bodies.circle(percentX(40), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-18.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logofour);
                    var logofive = Matter.Bodies.circle(percentX(50), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-19.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logofive);
                    var logosix = Matter.Bodies.circle(percentX(60), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-20.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logosix);
                    var logoseven = Matter.Bodies.circle(percentX(70), percentY(1), 50,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-21.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoseven);
                    var logoeight = Matter.Bodies.circle(percentX(80), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-22.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoeight);
                    var logonine = Matter.Bodies.circle(percentX(90), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-23.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logonine);
                    var logoten = Matter.Bodies.circle(percentX(95), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-24.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoten);
                    var logoeleven = Matter.Bodies.circle(percentX(15), percentY(1), 50,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-25.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoeleven);
                    var logotwelve = Matter.Bodies.circle(percentX(45), percentY(1), 50, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-26.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logotwelve);
                    var logothirteen = Matter.Bodies.circle(percentX(35), percentY(1), 50,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-27.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logothirteen);
                    var logofourteen = Matter.Bodies.circle(percentX(75), percentY(1), 50,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logo-resize-28.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logofourteen);

                    var floor = Matter.Bodies.rectangle(percentX(50), percentY(70), percentX(100), 25, {
                        isStatic: true, //An immovable object
                        render: {
                            visible: false,
                            fillStyle: '#000000'
                        }
                    });
                    Matter.World.add(world, floor);

                    var wallone = Matter.Bodies.rectangle(percentX(0), percentY(50), 25, percentY(100), {
                        isStatic: true, //An immovable object
                        render: {
                            visible: false,
                            fillStyle: '#000000'
                        }
                    });
                    Matter.World.add(world, wallone);

                    var walltwo = Matter.Bodies.rectangle(percentX(100), percentY(50), 25, percentY(100), {
                        isStatic: true, //An immovable object
                        render: {
                            visible: false,
                            fillStyle: '#000000'
                        }
                    });
                    Matter.World.add(world, walltwo);

                    var mouseConstraint = Matter.MouseConstraint.create(engine, {
                        element: canvas,
                        constraint: {
                            render: {
                                visible: false
                            },
                            stiffness:0.8
                        }
                    });
                    Matter.World.add(world, mouseConstraint);

                    Matter.Engine.run(engine);
                    Matter.Render.run(render);
                });
              } 
              else {
                window.addEventListener('load', function() {
                    var canvas = document.getElementById('world');


                    var engine = Matter.Engine.create();
                    var world = engine.world;
                    var render = Matter.Render.create({
                        canvas: canvas,
                        engine: engine,
                        options: {
                            width: window.innerWidth,
                            height: window.innerHeight,
                            background: 'transparent',
                            wireframes: false,
                            showAngleIndicator: false
                        }
                    });

                    function percentX(percent) {
                      return Math.round(percent/100 * window.innerWidth);
                    }
                    function percentY(percent) {
                      return Math.round(percent/100 * window.innerHeight);
                    }

                    var logoone = Matter.Bodies.circle(percentX(10), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                width:100,
                                    sprite: {
                                        texture: './Images/logos/logos-01.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoone);
                    var logotwo = Matter.Bodies.circle(percentX(20), percentY(1), 100,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-02.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logotwo);
                    var logothree = Matter.Bodies.circle(percentX(30), percentY(1), 100,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-03.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logothree);
                    var logofour = Matter.Bodies.circle(percentX(40), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-04.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logofour);
                    var logofive = Matter.Bodies.circle(percentX(50), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-05.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logofive);
                    var logosix = Matter.Bodies.circle(percentX(60), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-06.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logosix);
                    var logoseven = Matter.Bodies.circle(percentX(70), percentY(1), 100,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-07.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoseven);
                    var logoeight = Matter.Bodies.circle(percentX(80), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-08.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoeight);
                    var logonine = Matter.Bodies.circle(percentX(90), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-09.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logonine);
                    var logoten = Matter.Bodies.circle(percentX(95), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-10.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoten);
                    var logoeleven = Matter.Bodies.circle(percentX(15), percentY(1), 100,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-11.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logoeleven);
                    var logotwelve = Matter.Bodies.circle(percentX(45), percentY(1), 100, {
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-12.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logotwelve);
                    var logothirteen = Matter.Bodies.circle(percentX(35), percentY(1), 100,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-13.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logothirteen);
                    var logofourteen = Matter.Bodies.circle(percentX(75), percentY(1), 100,{
                        density: 0.04,
                        friction: 0.01,
                        frictionAir: 0.00001,
                        restitution: 0.8,
                        render: {
                                    strokeStyle: '#ffffff',
                                    sprite: {
                                        texture: './Images/logos/logos-14.png',
                                    }
                                }
                    });
                       Matter.World.add(world, logofourteen);

                    var floor = Matter.Bodies.rectangle(percentX(50), percentY(70), percentX(100), 25, {
                        isStatic: true, //An immovable object
                        render: {
                            visible: false,
                            fillStyle: '#000000'
                        }
                    });
                    Matter.World.add(world, floor);

                    var wallone = Matter.Bodies.rectangle(percentX(0), percentY(50), 25, percentY(100), {
                        isStatic: true, //An immovable object
                        render: {
                            visible: false,
                            fillStyle: '#000000'
                        }
                    });
                    Matter.World.add(world, wallone);

                    var walltwo = Matter.Bodies.rectangle(percentX(100), percentY(50), 25, percentY(100), {
                        isStatic: true, //An immovable object
                        render: {
                            visible: false,
                            fillStyle: '#000000'
                        }
                    });
                    Matter.World.add(world, walltwo);

                    var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
                        element: canvas,
                        constraint: {
                            render: {
                                visible: false
                            },
                            stiffness:0.8
                        }
                    });
                    
                    Matter.World.add(world, mouseConstraint);
mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
                    Matter.Engine.run(engine);
                    Matter.Render.run(render);
                });
              }
            }
                    var x = window.matchMedia("(max-width: 640px)")
                    myphysics(x) 
                    x.addListener(myphysics)              
                }
                

    if (document.body.classList.contains('paintings')) {var colour="#ef9bbd";} 
    else if (document.body.classList.contains('printtype')) { var colour="#e6e6e6";}
    else if (document.body.classList.contains('index')) { var colour="#e6e6e6";}
    else if (document.body.classList.contains('herve')) { var colour="#e8d36c";}
    else if (document.body.classList.contains('typology')) { var colour="#ef9bbd";}
    else if (document.body.classList.contains('liquorice')) { var colour="#000000";}
    else if (document.body.classList.contains('poemscraps')) { var colour="#ff7e00";}
    else if (document.body.classList.contains('bitsy')) { var colour="#9fc5a5";}
    else if (document.body.classList.contains('projectselect')) { var colour="#e6e6e6";}
    else if (document.body.classList.contains('department')) { var colour="#7f7ea1";}
    else if (document.body.classList.contains('gumdrop')) { var colour="#cc8f9f";}
    else if (document.body.classList.contains('paracetamol')) { var colour="#8baecd";}
    else if (document.body.classList.contains('rainace')) { var colour="#92add1";}
    else if (document.body.classList.contains('sunshots')) { var colour="#ed8f71";}
    else if (document.body.classList.contains('truenorth')) { var colour="#c35758";}
    else if (document.body.classList.contains('youngguns')) { var colour="#FF6699";}

    var sparkles=50;
    var x=ox=400;
    var y=oy=300;
    var swide=800;
    var shigh=600;
    var sleft=sdown=0;
    var tiny=new Array();
    var star=new Array();
    var starv=new Array();
    var starx=new Array();
    var stary=new Array();
    var tinyx=new Array();
    var tinyy=new Array();
    var tinyv=new Array();

    window.onload=function() { if (document.getElementById) {
      var i, rats, rlef, rdow;
      for (var i=0; i<sparkles; i++) {
        var rats=createDiv(3, 3);
        rats.style.visibility="hidden";
            rats.style.zIndex="999";
        document.body.appendChild(tiny[i]=rats);
        starv[i]=0;
        tinyv[i]=0;
        var rats=createDiv(5, 5);
        rats.style.backgroundColor="transparent";
        rats.style.visibility="hidden";
        rats.style.pointerevents="none";
        rats.style.zIndex="999";
        var rlef=createDiv(1, 5);
        var rdow=createDiv(5, 1);
        rats.appendChild(rlef);
        rats.appendChild(rdow);
        rlef.style.top="2px";
        rlef.style.left="0px";
        rdow.style.top="0px";
        rdow.style.left="2px";
        document.body.appendChild(star[i]=rats);
      }
      set_width();
      sparkle();
    }}
    function sparkle() {
      var c;
      if (x!=ox || y!=oy) {
        ox=x;
        oy=y;
        for (c=0; c<sparkles; c++) if (!starv[c]) {
          star[c].style.left=(starx[c]=x)+"px";
          star[c].style.top=(stary[c]=y)+"px";
          star[c].style.clip="rect(0px, 5px, 5px, 0px)";
          star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
          star[c].style.visibility="visible";
          starv[c]=50;
          break;
        }
      }
      for (c=0; c<sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout("sparkle()", 40);
    } 
    function update_star(i) {
      if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i]+=1+Math.random()*3;
        starx[i]+=(i%5-2)/5;
        if (stary[i]<shigh+sdown) {
          star[i].style.top=stary[i]+"px";
          star[i].style.left=starx[i]+"px";
        }
        else {
          star[i].style.visibility="hidden";
          starv[i]=0;
          return;
        }
      }
      else {
        tinyv[i]=50;
        tiny[i].style.top=(tinyy[i]=stary[i])+"px";
        tiny[i].style.left=(tinyx[i]=starx[i])+"px";
        tiny[i].style.width="2px";
        tiny[i].style.height="2px";
        tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility="hidden";
        tiny[i].style.visibility="visible"
      }
    }
    function update_tiny(i) {
      if (--tinyv[i]==25) {
        tiny[i].style.width="1px";
        tiny[i].style.height="1px";
      }
      if (tinyv[i]) {
        tinyy[i]+=1+Math.random()*3;
        tinyx[i]+=(i%5-2)/5;
        if (tinyy[i]<shigh+sdown) {
          tiny[i].style.top=tinyy[i]+"px";
          tiny[i].style.left=tinyx[i]+"px";
        }
        else {
          tiny[i].style.visibility="hidden";
          tinyv[i]=0;
          return;
        }
      }
      else tiny[i].style.visibility="hidden";
    }
    document.onmousemove=mouse;
    function mouse(e) {
      if (e) {
        y=e.pageY;
        x=e.pageX;
      }
      else {
        set_scroll();
        y=event.y+sdown;
        x=event.x+sleft;
      }
    }
    window.onscroll=set_scroll;
    function set_scroll() {
      if (typeof(self.pageYOffset)=='number') {
        sdown=self.pageYOffset;
        sleft=self.pageXOffset;
      }
      else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown=document.body.scrollTop;
        sleft=document.body.scrollLeft;
      }
      else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft=document.documentElement.scrollLeft;
        sdown=document.documentElement.scrollTop;
      }
      else {
        sdown=0;
        sleft=0;
      }
    }
    window.onresize=set_width;
    function set_width() {
      var sw_min=999999;
      var sh_min=999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
        if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
      }
      if (typeof(self.innerWidth)=='number' && self.innerWidth) {
        if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
        if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
        if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
      }
      if (sw_min==999999 || sh_min==999999) {
        sw_min=800;
        sh_min=600;
      }
      swide=sw_min;
      shigh=sh_min;
    }
    function createDiv(height, width) {
      var div=document.createElement("div");
      div.style.position="absolute";
      div.style.height=height+"px";
      div.style.width=width+"px";
      div.style.overflow="hidden";
      return (div);
    }
