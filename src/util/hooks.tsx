import { useEffect, useState } from "react";

export function useOutsideClick(
  ref: React.MutableRefObject<any>,
  action: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

type Flat<DATA> = Array<{ parentId?: number; data?: DATA; id: number }>;
type Tree<DATA> = { id: number; data?: DATA; children?: Array<Tree<DATA>> };
export function useTree<DATA>(initialFlat: Flat<DATA>) {
  const [flat, setFlat] = useState<Flat<DATA>>(initialFlat);
  const [tree, setTree] = useState<Tree<DATA>>(createTree(initialFlat));

  useEffect(() => {
    setTree(createTree(flat));
  }, [flat]);

  return { flat, tree, setFlat };
}

function createTree(flat: Flat<any>) {
  return { id: 0, children: populateTreeChildren(flat, (id) => !id, 0) };
}

function populateTreeChildren(
  flat: Flat<any>,
  cb: (parent_id: number | undefined) => boolean,
  depth: number
): Array<Tree<any>> {
  const output: Array<Tree<any>> = [];

  flat.forEach((entry, index) => {
    if (cb(entry.parentId)) {
      output.push({
        ...entry,

        children: populateTreeChildren(
          flat.filter((_f) => _f.id !== entry.id),
          (parent_id) => parent_id === entry.id,
          depth + 1
        ),
      });
    }
  });

  return output;
}
