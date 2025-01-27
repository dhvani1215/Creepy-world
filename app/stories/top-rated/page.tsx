"use client"

import { useState, useEffect } from "react"
import { StoryCardHorizontal } from "../../components/story-card-horizontal"
import { useStories } from "../../contexts/StoryContext"
import { Star } from "lucide-react"

export default function TopRatedStories() {
  const { stories } = useStories()
  const [sortedStories, setSortedStories] = useState(stories)

  useEffect(() => {
    const sorted = [...stories].sort((a, b) => b.rating - a.rating)
    setSortedStories(sorted)
  }, [stories])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-8 w-8 text-yellow-500" />
          <h1 className="text-4xl font-bold">Top Rated Stories</h1>
        </div>
        <span className="text-gray-400">{sortedStories.length} Stories</span>
      </div>

      <div className="space-y-6">
        {sortedStories.map((story) => (
          <StoryCardHorizontal key={story.id} story={story} />
        ))}
        {sortedStories.length === 0 && <p className="text-center text-gray-400">No stories found.</p>}
      </div>
    </div>
  )
}

