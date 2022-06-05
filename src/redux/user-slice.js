import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    avatarId: undefined
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name,
      state.avatarId = action.payload.avatarId
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
