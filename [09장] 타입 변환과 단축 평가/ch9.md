 # 타입 변환

- 타입 변환을 통해서 기존 원시값이 변경되지는 않는다
- 기존 원시값을 사용해 다른 타입의 새로운 원시값을 생성한다
- 암묵적 타입 변환이 가독성이 높다고 함!

### 1️⃣ **명시적 타입 변환**

- 개발자가 의도적으로 자료형을 변환하는 것
- 문자열 타입 변환
    1. String 생성자 함수 - new 연산자 없이 호출
        
        ```jsx
        String(NaN) → “NaN”
        ```
        
    2. toString 메서드
        
        ```jsx
        (100).toString
        ```
        
    3. 문자열 연결 연산자 (’’)
        
        ```jsx
        true + '’
        ```
        
- 숫자 타입으로 변환
    1. Number 생성자 함수
        
        ```jsx
        Number(‘-1’)  // → “-1”
        ```
        
    2. parseInt, parseFloat 함수 ( 숫자 문자열만 숫자 타입으로 변환 )
        
        ```jsx
        parseInt(‘100’)  // → 100
        ```
        
    3. +단항 산술 연산자
        
        ```jsx
        +true  // → 1
        ```
        
    4. * 산술 연산자
        
        ```jsx
        ‘10.52’ *1  // → 10.52
        ```
        

- 불리언 타입으로 변환
    1. Boolean 생성자 함수
        
        ```jsx
        Boolean({ })  // → true
        Boolean(NaN)  // → false
        ```
        
    2. 부정 논리 연산자 ( ! )
        
        ```jsx
        !!‘str’  // → true
        !!''  // → false
        !!undefined  // → false
        ```
        

### 2️⃣ **암묵적 타입 변환**

- 자바스크립트 엔진에 의해 자료형이 자동으로 변환되는 것
- 코드의 문맥을 고려해서 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 자동 변환

```jsx
예제1. ''붙이기
var num = 10
var str = num + ‘’  // → "10" 문자열
null + ''  // → "null"
undefined + ''  // →  "undefined"

예제2-1. 문자열을 처리하는 문맥일 경우
‘10’ + 2  // → ‘2’ 문자열로 강제 변환

예제2-2. 숫자를 처리하는 문맥일 경우
1 * '10'  // → 10
2 + null  // →  null = 0
1 + 'string'  // → NaN
10 + undefined  // → NaN
+[]  // → 0
+[10, 20]  // → NaN 

예제2-3. 불리언 타입을 처리하는 문맥일 경우
'', 0, -0, null, undefined, NaN   // → false
'str', {}, []  // → true

예제3. 심볼 타입
(Symbol()) + ''  // → 심볼은 TypeError 발생

예제4. 객체타입
({}) + ''  // → "[object Object]"
[] + ''  // → ""
[10, 20] + ''  // →  "10,20"
(function(){}) + ''  // → "function() {}"
Array + ''  // → "function Array() {[native code]}"
```

- ES6 - 템플릿 리터럴의 표현식 삽입(백틱 내)
    - 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환
    - `10 + 13 = ${10+13}`  // "10 + 13 = 23" 문자열

---

cf. 심볼타입이 뭐지????

Symbol Type : 

- 자바스크립트 타입에는 6개의 원시타입과 1개의 객체 타입이 있음 (**number, string, boolean, null, undefined, symbol**) + **object**

- 객체의 속성 key를 고유하게 설정하는 역할!

- Symbol 함수를 호출하면 매번 새로운(고유한) 심볼이 생성된다

- 심볼은 고유하기 때문에 심볼을 키로 갖는 프로퍼티는 다른 어떤 프로퍼티와도 충돌하지 않는다

- new 연산자를 이용한 래퍼 객체의 생성이 불가능하다 ( ex.  const sym = new Symbol();  → Uncaught TypeError )

- 외부 코드에서 접근 or 수정 불가

- 사용법 : `const sym = Symbol('KEYNAME');`

---

# 단축평가

### 1️⃣ 논리 연산자 사용

- A || B
    - A가 true라면? → 결과는 무조건 true (B 안봐도 됨)
    - A가 false라면? → B가 곧 결과임

- A && B
    - A가 true라면? → B가 곧 결과임
    - A가 false라면? → 결과는 무조건 false (B 안봐도 됨)

- If문 대체
    - 조건이 참으로 평가되는 값일 때, 논리곱 연산자 표현식으로 대체 가능
        
        result = true값 && 리턴값
        
        :  result에는 리턴값이 할당됨
        
    - 조건이 거짓으로 평가되는 값일 때, 논리합 연산자 표현식으로 대체 가능
        
        result = false값 || 리턴값 
        
        :  result에는 리턴값이 할당됨
        

### 2️⃣ 옵셔널 체이닝 연산자 ( ?. )

- **var v = element?.value**
    
    :  좌항의 피연산자가 null 또는 undefined인 경우 undefined 반환
    
       null인 경우 우항의 프로퍼티 참조를 수행
    
       var v = element && element.value 표현식과 같은 결과
    
- 좌항 피연산자 element가 undefined, null과 같은 값이면 element를 그대로 반환
- false, 0, NaN, ‘ ’의 경우엔 우항의 프로퍼티 참조를 그대로 수행 (&&와의 차이점)

```jsx
var str = ''
var v = str && str.length  // -> ''는 falsy값이기 때문에 str 그대로 할당
var v = str?.length  // -> str이 null or undefined가 아니니까 length 할당
```

### 3️⃣ NULL 병합 연산자 ( ?? )

- var v = null ?? ‘string’
    
    : 좌항의 피연산자가 null 또는 undefined인 경우 우항 피연산자 반환
    
      null 또는 undefined가 아닌 경우 좌항 피연산자 반환
    
      var v = null || ‘string’ 표현식과 같은 결과
    
- 논리연산자의 경우 0 또는 ‘ ’으로 기본값을 설정할 수 없다는 차이점 ~.~

```jsx
var v = '' || 'default'  //-> v = 'default' 
var v = '' || 'default'  //-> null 또는 undefined가 아니니까 v = ''
```