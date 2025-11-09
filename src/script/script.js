
import { PHI } from "/src/script/PHI.js"

(async () => {
    
        const phi = new PHI("canvas");
        phi.display([innerWidth, innerHeight]);

        const img1 = await phi.imgLoad("./src/img/c.png");

        const obj_1 = phi.object(img1,[200,300],null);

  
        
        
        
        let obj_1__ = phi.object(img1,[300,300],null);
        let size =1;
        
        
        phi.mainLoop(() => {
            (size += 0.03);
            console.log(size)

            obj_1__ = phi.reSize(obj_1,size,'center')
            

            phi.fill(0.1,0.1,0.1,1);
            phi.blit(obj_1__);
           
        });
    
})();    

