import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Minus, Hammer, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { sendChatMessage, ChatMessage } from '../../services/chatService';

export default function HirfaChatbot() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDelayed, setIsDelayed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getUserFriendlyMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'network_error':
        return isRTL ? '⚠️ لا أستطيع الرد حاليًا. تأكد من اتصالك بالإنترنت.' : '⚠️ I can\'t respond right now. Please check your internet connection.';
      case 'timeout':
        return isRTL ? '⏳ يبدو أن الرد متأخر. أعد المحاولة من فضلك.' : '⏳ The response is taking too long. Please try again.';
      case 'rate_limited':
        return isRTL ? '🕒 أتلقى أسئلة كثيرة! انتظر لحظة ثم حاول مجددًا.' : '🕒 I\'m receiving too many questions! Wait a moment and try again.';
      case 'invalid_response':
        return isRTL ? '🤔 لم أفهم الرد الذي وصلني. يمكنك إعادة صياغة سؤالك؟' : '🤔 I didn\'t understand the response. Could you rephrase your question?';
      default:
        return isRTL ? '⚙️ أواجه مشكلة تقنية بسيطة. حاول بعد قليل.' : '⚙️ I\'m facing a minor technical issue. Try again in a bit.';
    }
  };

  // Initialize welcome message when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeText = isRTL 
        ? t('chat.welcome_ar')
        : t('chat.welcome_en');
      
      setMessages([
        { id: 'welcome', role: 'model', content: welcomeText }
      ]);
    }
  }, [isOpen, isRTL, messages.length, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    setIsDelayed(false);

    const timeoutId = setTimeout(() => {
      setIsDelayed(true);
    }, 8000);

    try {
      const aiResponse = await sendChatMessage(messages, userMsg.content);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: aiResponse
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error: any) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: getUserFriendlyMessage(error.message)
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
      setIsDelayed(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            title={t('chat.title')}
            className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 w-14 h-14 bg-[var(--color-primary)] text-[var(--color-bg-sand)] rounded-full shadow-xl shadow-[var(--color-primary)]/20 flex items-center justify-center border-2 border-[var(--color-card)] hover:bg-[var(--color-primary-hover)] transition-colors`}
          >
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              {messages.length === 0 && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-accent)] border border-[var(--color-primary)]"></span>
                </span>
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[550px] max-h-[calc(100vh-6rem)] bg-[var(--color-card)] flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-[var(--color-border)]`}
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] text-[var(--color-bg-sand)] px-4 py-3 flex justify-between items-center z-10 flex-shrink-0 relative">
              <div className="flex items-center gap-3">
                 <div className="bg-[var(--color-bg-sand)]/20 p-2 text-[var(--color-bg-sand)] rounded-xl relative">
                    <Hammer className="w-5 h-5 absolute opacity-50 inset-0 m-auto -rotate-45" />
                    <MessageSquare className="w-5 h-5 relative z-10 opacity-90" />
                 </div>
                 <div>
                    <h3 className="font-heading font-bold text-lg leading-tight">{t('chat.name')}</h3>
                    <p className="text-xs text-[var(--color-bg-sand)]/80 font-medium">{t('chat.role')}</p>
                 </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/10 rounded-lg transition-colors" title="Minimize">
                  <Minus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[var(--color-bg-sand)]/50 relative">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-dark)] border border-[var(--color-accent)]/20 rounded-br-sm rtl:rounded-bl-sm rtl:rounded-br-2xl'
                        : 'bg-[var(--color-primary)]/10 text-[var(--color-dark)] border border-[var(--color-primary)]/20 rounded-bl-sm rtl:rounded-br-sm rtl:rounded-bl-2xl'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className={`flex flex-col items-start gap-2`}>
                  <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-secondary)] rounded-2xl rounded-bl-sm rtl:rounded-br-sm rtl:rounded-bl-2xl px-4 py-3 flex items-center gap-1.5">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></motion.div>
                  </div>
                  {isDelayed && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] text-amber-600 dark:text-amber-400 font-medium px-2"
                    >
                      {isRTL ? 'يبدو أن الرد متأخر، جارٍ المحاولة...' : 'Response seems delayed, retrying...'}
                    </motion.p>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[var(--color-card)] border-t border-[var(--color-border)] flex-shrink-0 z-10">
              <form onSubmit={handleSendMessage} className="flex relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="w-full bg-[var(--color-bg-sand)] text-[var(--color-dark)] border border-[var(--color-border)] rounded-xl py-3 px-4 focus:outline-none focus:border-[var(--color-primary)] transition-colors pr-12 rtl:pl-12 rtl:pr-4"
                  dir={isRTL ? 'rtl' : 'ltr'}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-2' : 'right-2'} w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                    !inputValue.trim() || isLoading
                      ? 'text-[var(--color-secondary)]/50'
                      : 'bg-[var(--color-primary)] text-[var(--color-bg-sand)] hover:bg-[var(--color-primary-hover)]'
                  }`}
                >
                  <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-[var(--color-secondary)]/60 font-medium">
                  {t('chat.ai_disclaimer')}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
