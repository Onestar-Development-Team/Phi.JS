
import { PHI } from "/src/script/PHI.js"

(async () => {
    
        const phi = new PHI("canvas");
        phi.display([innerWidth, innerHeight]);

        const img1 = await phi.imgLoad("./src/img/c.png");

        const obj_1 = phi.object(img1,[200,300],null);

        let obj_1__ = phi.object(img1,[300,300],null);
        
        
        const origin = [
            obj_1__.x + obj_1__.width/2,
            obj_1__.y + obj_1__.height/2
        ]

        phi.mainLoop(() => {

            obj_1__ = phi.rotate(obj_1__,1,'center')
            
            obj_1__ = phi.move(obj_1__,2,0)

            console.log(obj_1__.vertex)





            phi.fill(0.1,0.1,0.1,1);
            phi.blit(obj_1__);
           
        });
    
})();    

