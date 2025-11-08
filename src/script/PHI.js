
import { easyWebgl2 } from "/src/script/easyWebgl2.js"

export class PHI {
    constructor(id){
        const canvas_ = document.getElementById(id)
        canvas_.width = innerWidth
        canvas_.height = innerHeight
        canvas_.style.margin = 0
        canvas_.style.padding = 0

        this.canvas = canvas_;
        this.app = new easyWebgl2(this.canvas);
        this.objectList = []
        this.object_ = {
            img:null,
            x:0,
            y:0,
            width:0,
            height:0,
            vertex:null,
        }
    }

    async imgLoad(src){
        const img_ = await this.app.loadImage(src);
        return img_
    }

    display(size){
        const canvas = this.canvas;
        canvas.width = size[0]
        canvas.height = size[1]
    }

    object(img, pos, size = null, vertex = null){
        const obj = { img: null, x:0, y:0, width:0, height:0, vertex: null }; // 새 객체 생성
        obj.img = img;
        obj.x = pos[0];
        obj.y = pos[1];

        if (size === null){
            obj.width = img.width;
            obj.height = img.height;
        } else {
            obj.width = size[0];
            obj.height = size[1];
        }

        obj.vertex = vertex;
        return obj;
    }

    blit(obj_){
        const obj = obj_;
        if (!obj.img) return;
        // console.log(obj)
        this.app.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height,obj.vertex);
        // this.app.drawImage(dog, 100,0, 100, 100);

    }

    mainLoop(func){
        this.app.update(func);
    }

    fill(r,g,b,a){
        this.app.clear(r,g,b,a);
    }


}

