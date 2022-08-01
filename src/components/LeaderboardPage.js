import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { LevelCard } from "./LevelCard";

export function LeaderboardPage({levelData}){
    return (
    <div className="flex flex-col items-center justify-center text-white font-Oswald pb-9">
        <Header></Header>
      <h1 className="my-[75px] text-5xl">Leaderboard</h1>
      <div className="flex flex-wrap gap-10 justify-evenly w-full px-10">
        {Object.entries(levelData)
        .map(([level]) => 
        <Link to = {`level/${level}`} reloadDocument = {true}>
          <LevelCard name = {levelData[level].name} image = {levelData[level].image}></LevelCard>
        </Link>
        )}
      </div>
    </div>
    )
}