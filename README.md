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

```tsx
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

#### step1.

```tsx
src/icons/svgs 폴더안에 svg 파일을 넣는다.
```

#### step2.

```tsx
터미널에 아래 명령어를 입력한다.

yarn svgr
```

#### step3.

```tsx
아래 명령어를 입력하여 build 폴더를 최신화한다.

yarn build
```

#### step4.

```tsx
추가된 icon 컴포넌트를 commit, push 한다.
```

#### step5.

```tsx
디자인시스템을 사용하는 사내 프로젝트에 node_modules, yarn.lock을 제거한다.
```

#### step6.

```tsx
아래 명령어를 입력하여 dependenies를 재 설치한다.

yarn install
```

#### step7.

```tsx
추가한 icon을 아래와 같은 방법으로 사용한다.

import { TestIcon } from 'enkor-design-system';
```
