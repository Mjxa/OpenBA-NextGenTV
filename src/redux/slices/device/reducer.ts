/*
 * Copyright © 2022 Sinclair Broadcast Group
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { createSlice } from '@reduxjs/toolkit';
import { Device } from 'types/Device';
import { fetchDeviceInfo } from './actions';

export interface InitialState {
  loaded: boolean;
  loading: boolean;
  value: Device;
  error?: null;
}

const initialState: InitialState = {
  value: { isInternetConnected: false, baseURI: null },
  loading: false,
  loaded: false,
  error: null,
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    changeNetworkStatus: (state, { payload }) => {
      state.value.isInternetConnected = payload.isInternetConnected;
    },
  },
  extraReducers: {
    [fetchDeviceInfo.pending.toString()]: (state) => {
      state.loading = true;
    },
    [fetchDeviceInfo.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.value = action.payload;
    },
    [fetchDeviceInfo.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.loaded = false;
      state.error = action.payload;
    },
  },
});

export default deviceSlice.reducer;

export const { actions, reducer } = deviceSlice;
