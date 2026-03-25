export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Ссылка скопирована в буфер обмена!');
    return true;
  } catch {
    alert('Не удалось скопировать ссылку');
    return false;
  }
};