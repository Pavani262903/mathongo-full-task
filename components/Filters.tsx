'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import {
  setClassFilter,
  setUnitsFilter,
  setStatusFilter,
  toggleWeakChapters
} from '../store/slices/filtersSlice'

export function Filters({ classOptions, unitOptions }) {
  const dispatch = useDispatch()

  return (
    <div className="mb-4 space-y-2">
      <label className="block font-semibold">Class:</label>
      <select multiple onChange={(e) =>
        dispatch(setClassFilter(Array.from(e.target.selectedOptions, o => o.value)))
      }>
        {classOptions.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <label className="block font-semibold">Units:</label>
      <select multiple onChange={(e) =>
        dispatch(setUnitsFilter(Array.from(e.target.selectedOptions, o => o.value)))
      }>
        {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
      </select>

      <label className="block font-semibold">Status:</label>
      <select onChange={(e) =>
        dispatch(setStatusFilter(e.target.value))
      }>
        <option value="">All</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <div>
        <label className="inline-flex items-center gap-2 mt-2">
          <input type="checkbox" onChange={() => dispatch(toggleWeakChapters())} />
          Weak Chapters Only
        </label>
      </div>
    </div>
  )
}