

# PHI.JS

phi.js는 webgl2 기반 렌더링 엔진입니다.
한별중학교 dev팀을 위해 개발되었었으며 재학생이라면 누구든지
무료로 사용가능합니다.

재학생이 아닐경우 허가후 사용가능 합니다.
# 라이선스
© 2025 wh-snuwman. All rights reserved.


# 사용법

기본적인 베이스는 아래와 같습니다

---

```javascript
import { PHI } from "/@phi/src/script/PHI.js"


(async () => {

    const phi = new PHI("html파일안의canvas태그아이디");

    phi.display([innerWidth, innerHeight]);

  

    const img = await phi.imgLoad("이미지경로");

    const obj = phi.object(img1,[200,300],null);

  

    phi.mainLoop(() => {

        phi.fill(0.1,0.1,0.1,1);

        phi.blit(obj);

    });

  

})();
```

---

```javascript
import { PHI } from "/@phi/src/script/PHI.js"
```

먼저 PHI가 있는 디렉토리에서 PHI.js를 불러옵니다.

---

```javascript
    const phi = new PHI("html파일안의canvas태그아이디");
    phi.display([innerWidth, innerHeight]);
```

이후 PHI를 사용해 객체를 생성하고 canvas의 크기를 초기화 하기위해
display함수를 사용합니다. 

---

```javascript
	const img = await phi.imgLoad("이미지경로");
    const obj = phi.object(img1,[200,300],null);
```

이루 이미지를 imgLoad를 사용해 로드합니다.

그후 PHI.js 고유의 시스템 **오브젝트** 를 선언합니다.

오브젝트 객체 안에는 위치,사이즈,텍스쳐 등 오브젝트에 관한 모든요소가 저장됩니다.

---

```javascript
	phi.mainLoop(() => {
	
	phi.fill(0.1,0.1,0.1,1);
	
	phi.blit(obj);

```

이후 내장 되어 있는 mainLoop함수를 위와 같이 사용해
루프를 사용할 수 있습니다. 
내장코드에 requestAnimationFrame이 사용 되어있습니다.

---

# 주의점

1. 모든코드는 async 비동기 함수안에서 진행되어야 합니다.(import 제외)
2. display 함수는 배열을 입력값으로 합니다.
3. `move()`함수는 이미지가 회전해도 x,y를 기준으로 움직이게 할 수 있습니다.
	만일 `obj.x += 1` 라고 코드를 작성하면, 이미지의 회전과 움직임이 
	동기화 되지 않아 올바르게 코드가 동작하지 않을수도 있습니다.


# 함수 파라미터

내장함수의 입력값을 설명합니다.
- `imgLoad( 이미지경로 )
- `display( 크기=[가로,세로] )`
- `object( 이미지객체, 좌표, 크기(선택), 버텍스정점(선택) )`
- `blit( 오브젝트 객체)`
- `mainLoop( 함수 )`
- `fill( RGBA )`
- `distanceGetObj( 오브젝트1, 오브젝트2, 기준(선택) )`
- `isEncounterObj( 오브젝트1, 오브젝트2 )`
- `isEncounterPos( 오브젝트,좌표(배열) )`
- `random( 최소값, 최대값 )`
- `randomFloat( 최소값, 최대값 )`
- `rotate( 오브젝트, 각고, 기준점(선택) )`
- `reSizeBy( 오브젝트, 비율, 기준(선택) )`
- `move( 오브젝트, x증가량, y증가량)`

#### 추후 업데이트로 더 많은 기능이 추가될 예정입니다.


