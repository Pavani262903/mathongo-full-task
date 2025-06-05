'use client'

import { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import chaptersData from '../data/chapters.json'
import { ChapterCard } from '../components/ChapterCard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setSubject } from '../store/slices/filtersSlice'
import { Filters } from '../components/Filters'

export default function HomePage() {
  const dispatch = useDispatch()
  const {
    selectedSubject,
    selectedClass,
    selectedUnits,
    statusFilter,
    weakChaptersOnly
  } = useSelector((state: RootState) => state.filters)

  const subjects = ['Physics', 'Chemistry', 'Mathematics']

  const classOptions = Array.from(new Set(
    chaptersData.filter(c => c.subject === selectedSubject).map(c => c.class)
  ))
  const unitOptions = Array.from(new Set(
    chaptersData.filter(c => c.subject === selectedSubject).map(c => c.unit)
  ))

  const filtered = chaptersData.filter(c =>
    c.subject === selectedSubject &&
    (selectedClass.length === 0 || selectedClass.includes(c.class)) &&
    (selectedUnits.length === 0 || selectedUnits.includes(c.unit)) &&
    (!statusFilter || c.status === statusFilter) &&
    (!weakChaptersOnly || c.weak)
  )

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Chapter List</h1>

      <Tabs value={selectedSubject} onValueChange={(v) => dispatch(setSubject(v))}>
        <TabsList className="mb-4">
          {subjects.map(sub => (
            <TabsTrigger key={sub} value={sub}>{sub}</TabsTrigger>
          ))}
        </TabsList>

        {subjects.map(sub => (
          <TabsContent key={sub} value={sub}>
            <Filters classOptions={classOptions} unitOptions={unitOptions} />
            <div className="grid gap-4">
              {filtered.map(ch => (
                <ChapterCard key={ch.id} chapter={ch} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  )
}