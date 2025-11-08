
import { PHI } from "/src/script/PHI.js"

(async () => {
    
        const phi = new PHI("canvas");
        phi.display([innerWidth, innerHeight]);

        const img1 = await phi.imgLoad("./src/img/1.jpg");
        const img2 = await phi.imgLoad("./src/img/2.jpg");
        
        const t1 = phi.object(img1,[0,0],[200,200]);
        const t2 = phi.object(img2,[0,0],[400,200]);
        t2.width = innerWidth
        t2.height = innerHeight
    
        phi.mainLoop(() => {
            phi.fill(0.1,0.1,0.1,1);
            phi.blit(t1);
            phi.blit(t2);
        });
    
})();    

