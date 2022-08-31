import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Film() {
  return (
    <div>
      <div
        style={{ width: '100%', height: '200px', backgroundColor: 'tomato' }}
      >
        大轮播
      </div>
      {/* 路由容器 有点像 vue中 router-view */}
      <Outlet></Outlet>
    </div>
  );
}
