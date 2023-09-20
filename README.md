# Enkor Design System

## Stack

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=black"> 
  <img src="https://img.shields.io/badge/rollup.js-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_Components-DB7093?style=for-the-badge&logo=styledComponents&logoColor=black">

## Guide

### Install enkor-design-system

#### 1. 사내 프로젝트 package.json에 github link 방식으로 설치

```tsx
"enkor-design-system": "git+https://github.com/Enjoy-Korea/enkorDesignSystem.git"
```

<br />

#### 2. 디자인시스템의 특정 branch를 사내 프로젝트에서 테스트할 경우 “#” 추가

```tsx
// 예시 - #specific-branch
"enkor-design-system": "git+https://github.com/Enjoy-Korea/enkorDesignSystem.git#specific-branch"
```

<br />

---

### Color

#### 1. scss 파일 내 사용 방식

```scss
// 특정 .scss 파일
@import "~enkor-design-system/src/color/color.module.scss";

.className {
  color: map-get($map: $gray-scale, $key: main);
}
```

#### 2. 컴포넌트 내 사용 방식

```tsx
import { grayScale } from "enkor-design-system";

const TestComponent = () => {
  return (
    //...
    <Typo color={grayScale[500]} />
    //...
  );
};
```

<br />

---

### Generate icon

#### 아이콘 추가 방법

```tsx
1. src/icons/svgs 폴더안에 svg 파일을 넣는다.

2. 터미널에 'yarn svgr' 명령어를 입력한다.

3. 'yarn build' 명령어를 입력하여 build 폴더를 최신화한다.

4. 추가된 icon 컴포넌트를 commit, push 한다.
```

#### 사내 프로젝트 아이콘 사용방법

```tsx
1. 디자인시스템을 사용하는 사내 프로젝트에 node_modules, yarn.lock을 제거한다.

2. 'yarn install' 명령어를 입력하여 dependenies를 재 설치한다.

3. 추가한 icon을 아래와 같은 방법으로 사용한다.
   import { TestIcon } from 'enkor-design-system';
```
