
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
        const obj = { img: null, x:0, y:0, width:0, height:0, vertex: null };
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

        if (vertex == null){
            const x1 = obj.x;
            const y1 = obj.y;
            const x2 = obj.x + obj.width;
            const y2 = obj.y + obj.height;
            obj.vertex = [x1, y1,x2, y1,x1, y2,x1, y2,x2, y1,x2, y2]
            
            
            null;
        } else {
            obj.vertex = vertex;
        }



        return obj;
    }

    blit(obj_){
        const obj = obj_;
        if (!obj.img) return;
        this.app.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height,obj.vertex);

    }

    mainLoop(func){
        this.app.update(func);
    }

    fill(r,g,b,a){
        this.app.clear(r,g,b,a);
    }

    distanceGetObj(obj1,obj2,mark="center"){
        if (mark == 'center') {
            return Math.sqrt(((obj2.x+(obj2.width/2)) - (obj1.x+(obj1.width/2)))**2 + ((obj2.y+(obj2.height/2)) - (obj1.y+(obj1.height/2)))**2)

        } else {
            return Math.sqrt((obj2.x - obj1.x)**2 + (obj2.y - obj1.y)**2)
        }
    }

    isEncounterObj(obj1,obj2){ // 추후 가능하다면 정점이 전환된 이미지의 접촉여부도 감지할수 있게 만들기
        if (((obj1.x <= obj2.x)  && (obj2.x <= obj1.x + obj1.width)) || ((obj1.x <= obj2.x + obj2.width) && (obj2.x +obj2.width <= obj1.x + obj1.width))) {            
            if (((obj1.y <= obj2.y)  && (obj2.y <= obj1.y + obj1.height)) || ((obj1.y <= obj2.y + obj2.height) && (obj2.y +obj2.height <= obj1.y + obj1.height))) {            
                return true;
            }
        }
        return false;
    } 

    random(num1,num2){
        if (num1 > num2) {
            console.error('랜덤오류. 최솟값이 최댓값보다 클수 없습니다')
            return;
        }
        return Math.floor(Math.random() * (num2 - num1 + 1)) + num1
    }

    randomFloat(num1,num2){
        if (num1 > num2) {
            console.error('랜덤오류. 최솟값이 최댓값보다 클수 없습니다')
            return;
        }
        return (Math.random() * (num2 - num1)) + num1
    }


    rotate(obj,deg,mark="center",pos=[0,0]){
        const rad = deg * Math.PI / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const rotated = [];

        for (let i = 0; i < obj.vertex.length; i += 2) {
            if (mark == 'zero'){
                const x = obj.vertex[i];
                const y = obj.vertex[i + 1];
                const rx = x * cos - y * sin;
                const ry = x * sin + y * cos;
                rotated.push(rx, ry);
            } else if (mark == 'center') {
                const x = obj.vertex[i] - (obj.x+obj.width/2);
                const y = obj.vertex[i + 1] - (obj.y+obj.height/2);
                const rx = x * cos - y * sin + (obj.x+obj.width/2);
                const ry = x * sin + y * cos + (obj.y+obj.height/2);
                rotated.push(rx, ry);
            } else if (mark == 'custom') {
                const x = obj.vertex[i] - pos[0];
                const y = obj.vertex[i + 1] - pos[1];
                const rx = x * cos - y * sin + pos[0];
                const ry = x * sin + y * cos + pos[1];
                rotated.push(rx, ry);
            }

            
        }
        
        obj.vertex = rotated
        return obj;

    }

    reSize(obj,ratio,mark='center'){
        if (mark == 'center'){
            const obj_ = {...obj};
            obj_.width = obj_.width * ratio
            obj_.height = obj_.height * ratio
            obj_.x -= obj_.width/2
            obj_.y -= obj_.height/2
            obj_.x += obj.width/2
            obj_.y += obj.height/2
            

            //  이건 가장 나중에 obj_의 버텍스 설정 (신경안써도됨)
            const x1 = obj_.x;
            const y1 = obj_.y;
            const x2 = obj_.x + obj_.width;
            const y2 = obj_.y + obj_.height;
            obj_.vertex = [x1, y1,x2, y1,x1, y2,x1, y2,x2, y1,x2, y2]
            return obj_

        } else {
            const obj_ = {...obj};
            obj_.width = obj_.width * ratio;
            obj_.height = obj_.height * ratio;
            const x1 = obj_.x;
            const y1 = obj_.y;
            const x2 = obj_.x + obj_.width;
            const y2 = obj_.y + obj_.height;
            obj_.vertex = [x1, y1,x2, y1,x1, y2,x1, y2,x2, y1,x2, y2]
            return obj_

        }
        
        
        






    }

}

