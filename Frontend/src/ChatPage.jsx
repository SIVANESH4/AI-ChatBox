import React from 'react'

export default function ChatPage() {
  return (
    <div class="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">

      <aside class="hidden md:flex w-72 bg-white flex-col border-r border-gray-200 shadow-sm">
        <div class="p-6">
          <button class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-bold shadow-md transform active:scale-[0.98]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            New Conversation
          </button>
        </div>

        <div class="flex-1 overflow-y-auto px-4 space-y-2">
          <p class="px-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Recent Activity</p>

          <div class="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-700 cursor-pointer border border-indigo-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span class="text-sm font-semibold truncate">Customer Support Bot</span>
          </div>

          <div class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 cursor-pointer text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span class="text-sm font-medium truncate">Project Brainstorming</span>
          </div>
        </div>

        <div class="p-4 border-t border-gray-100">
          <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border border-indigo-200">
              JD
            </div>
            <div class="flex-1 truncate">
              <p class="text-sm font-bold text-gray-900 truncate">John Doe</p>
              <p class="text-xs text-gray-500 truncate">Pro Account</p>
            </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 flex flex-col relative bg-white md:m-4 md:rounded-2xl md:shadow-xl border border-gray-100">

        <header class="flex items-center justify-between p-5 border-b border-gray-50">
          <div class="flex items-center gap-3">
            <div class="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
            <h2 class="text-xl font-extrabold text-gray-900 tracking-tight">AI Assistant</h2>
          </div>
          <div class="flex items-center gap-2">
            <span class="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span class="text-xs font-bold text-gray-500 uppercase tracking-tighter">System Ready</span>
          </div>
        </header>

        <div class="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">

          <div class="flex gap-4 max-w-4xl">
            <div class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-indigo-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path></svg>
            </div>
            <div class="space-y-2">
              <div class="inline-block bg-gray-100 px-5 py-3 rounded-2xl rounded-tl-none text-gray-800 text-md leading-relaxed border border-gray-200 shadow-sm">
                Welcome to the new dashboard! How can I assist you with your project today?
              </div>
              <p class="text-[10px] font-bold text-gray-400 uppercase ml-1">Assistant • Just now</p>
            </div>
          </div>

          <div class="flex gap-4 max-w-4xl justify-end">
            <div class="space-y-2 text-right">
              <div class="inline-block bg-indigo-600 px-5 py-3 rounded-2xl rounded-tr-none text-white text-md leading-relaxed shadow-lg shadow-indigo-100">
                Can you show me the theme updates?
              </div>
              <p class="text-[10px] font-bold text-gray-400 uppercase mr-1">You • 1m ago</p>
            </div>
          </div>

        </div>

        <div class="p-6 border-t border-gray-50">
          <div class="max-w-4xl mx-auto relative">
            <input
              type="text"
              placeholder="Type your message..."
              class="w-full bg-white border border-gray-300 rounded-xl py-4 pl-5 pr-16 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm placeholder-gray-400 text-gray-700"
            />
            <button class="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
          <p class="text-center text-[11px] text-gray-400 mt-4">
            Premium AI Model &bull; Secure Connection &bull; 2026
          </p>
        </div>
      </main>
    </div>
  )
}
