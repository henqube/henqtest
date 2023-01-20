(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.img_btn_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("A0UH+IAAv7MAopAAAIAAP7g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_btn_start, new cjs.Rectangle(-130.1,-51,260.2,102.1), null);


(lib.btn_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {mouse_down:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer_1
	this.instance = new lib.img_btn_start();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.7383,scaleY:0.7383},2,cjs.Ease.cubicIn).to({scaleX:1,scaleY:1},3,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.1,-51,260.2,102.1);


(lib.mc_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn_start = new lib.btn_start();
	this.btn_start.name = "btn_start";
	this.btn_start.setTransform(4,157.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8C8C8").s().p("AhHCfQgcgMgPgWQgPgWgEggQgFgfAAgoQAAgoAFgfQAEggAPgVQAPgWAcgMQAbgLAsgBQAuABAbALQAbAMAOAWQAQAVAEAgQAFAgAAAnQAAAogFAfQgFAggPAWQgPAWgbAMQgbAMgtgBQgsABgbgMgAgXhRQgJAFAAASIAACRIAXAAQAWAAAJgFQAKgGgBgRIAAiRIgXAAQgXAAgIAFg");
	this.shape.setTransform(31.25,-89.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8C8C8").s().p("AALCiIAAg0IifAAIAAhBIBQjPIC3AAIAAC3IAiAAIAABZIgiAAIAAA0gAgnAVIAyAAIAAhoIgFAAg");
	this.shape_1.setTransform(0.125,-89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8C8C8").s().p("AiICYIAPhVQAyAMAkAAQAkAAAYgDIAAgaIgmgEQghgDgUgFQgWgGgMgJQgOgIgEgNQgFgNgBgUIABgkIAFhjIDrAAIgIBaIh6gHIAAAaIAdADQAjAFAXAJQAXAHAOANQAOANAGARQAGARAAAXQAAAggJAXQgJAXgMALQgKAKgPAFQgOAGgRADQgQACgRABIgcAAQhDAAg7gOg");
	this.shape_2.setTransform(-30.9,-89.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8C8C8").s().p("AhHCfQgcgMgPgWQgPgWgEggQgFgfAAgoQAAgnAFggQAEggAPgVQAPgWAcgMQAbgMAsAAQAuAAAbAMQAbAMAOAWQAQAWAEAfQAFAgAAAnQAAAogFAgQgFAggPAVQgPAWgbAMQgbALgtABQgsgBgbgLgAgXhRQgJAFAAASIAACRIAXAAQAWAAAJgFQAKgGgBgRIAAiRIgXAAQgXAAgIAFg");
	this.shape_3.setTransform(31.25,-144.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8C8C8").s().p("AhHCfQgcgMgPgWQgPgWgFggQgEgfAAgoQAAgnAEggQAFggAPgVQAPgWAcgMQAbgMAsAAQAtAAAbAMQAcAMAPAWQAPAWAEAfQAFAgAAAnQAAAogFAgQgFAggPAVQgOAWgcAMQgbALgtABQgsgBgbgLgAgXhRQgJAFAAASIAACRIAXAAQAWAAAKgFQAIgGABgRIAAiRIgYAAQgWAAgJAFg");
	this.shape_4.setTransform(0.05,-144.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8C8C8").s().p("AiGCcIAPhVQAzAMAgAAQAkAAAXgDIAAgiIhZgJIAAhJIBZgLIAAgiIgVgCIgdAAQgiAAg1ALIgNhOQA/gTA8gBIAuACQAYACASAIQATAIAMAQQALARAAAeQAAA0gsAYIAAACQA0AUAAA4QAAAlgNAUQgNAVgWAKQgWAKgcADQgbACgbABQg5gBg7gOg");
	this.shape_5.setTransform(-30.9,-144.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgXbAqMMAAAhUXMAu3AAAMAAABUXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_start}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_title, new cjs.Rectangle(-150,-270,300,540), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.mc_title.btn_start.addEventListener('click', btn_click.bind(this));
		
		
		
		function btn_click(e)
		{
			if(e.currentTarget.name == "btn_start")
			{
				e.currentTarget.gotoAndPlay("mouse_down");
				//this.play();
			}		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(376));

	// intro
	this.mc_title = new lib.mc_title();
	this.mc_title.name = "mc_title";
	this.mc_title.setTransform(150,270);

	this.timeline.addTween(cjs.Tween.get(this.mc_title).to({_off:true},264).wait(112));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,540);
// library properties:
lib.properties = {
	id: '3ED423556D08ED49B392637DB9795D1D',
	width: 300,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3ED423556D08ED49B392637DB9795D1D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;