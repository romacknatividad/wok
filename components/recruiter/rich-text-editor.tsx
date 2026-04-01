'use client';

import { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, List, ListOrdered, Pilcrow } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function RichTextEditor({
  label,
  id,
  value,
  minHeightClassName,
  onChange
}: {
  label: string;
  id: string;
  value: string;
  minHeightClassName: string;
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: value,
    editorProps: {
      attributes: {
        id,
        class: `prose prose-slate max-w-none px-4 py-3 text-sm text-slate-900 outline-none focus:outline-none ${minHeightClassName}`
      }
    },
    onUpdate: ({ editor: currentEditor }) => {
      const html = currentEditor.getHTML();
      onChange(isEditorEmpty(html) ? '' : html);
    }
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const currentHtml = editor.getHTML();

    if (currentHtml !== value) {
      editor.commands.setContent(value || '<p></p>', { emitUpdate: false });
    }
  }, [editor, value]);

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-sm">
        <div className="flex flex-wrap gap-2 border-b border-blue-100 bg-slate-50 px-3 py-3">
          <EditorToolbarButton
            label="Paragraph"
            isActive={editor?.isActive('paragraph') ?? false}
            onClick={() => editor?.chain().focus().setParagraph().run()}
          >
            <Pilcrow className="h-4 w-4" />
          </EditorToolbarButton>
          <EditorToolbarButton
            label="Bold"
            isActive={editor?.isActive('bold') ?? false}
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            <Bold className="h-4 w-4" />
          </EditorToolbarButton>
          <EditorToolbarButton
            label="Italic"
            isActive={editor?.isActive('italic') ?? false}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          >
            <Italic className="h-4 w-4" />
          </EditorToolbarButton>
          <EditorToolbarButton
            label="Bullet list"
            isActive={editor?.isActive('bulletList') ?? false}
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
          >
            <List className="h-4 w-4" />
          </EditorToolbarButton>
          <EditorToolbarButton
            label="Numbered list"
            isActive={editor?.isActive('orderedList') ?? false}
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          >
            <ListOrdered className="h-4 w-4" />
          </EditorToolbarButton>
        </div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

function EditorToolbarButton({
  label,
  isActive,
  onClick,
  children
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${
        isActive
          ? 'border-blue-200 bg-blue-50 text-blue-700'
          : 'border-blue-100 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700'
      }`}
    >
      {children}
    </button>
  );
}

function isEditorEmpty(html: string) {
  return (
    html === '<p></p>' ||
    html === '<p><br></p>' ||
    html.trim() === ''
  );
}
