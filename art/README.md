# Art Folder Structure

All artwork for the Lorwyn/Shadowmoor Cube Lore Primer lives here.
Folders are organised by **world → tribe or category**.

```
art/
  lorwyn/
    places/             ← landscapes, named locations, establishing shots
    creatures/          ← all living beings (tribes + misc)
      elementals/       ← elemental spirits
      elves/            ← Gilt Leaf elves (Lorwyn phase)
      kithkin/          ← clachan kithkin (Lorwyn phase)
      faeries/          ← Glen Elendra faeries (Lorwyn phase)
      merrow/           ← Wanderwine merrow (Lorwyn phase)
      flamekin/         ← flamekin pilgrims (Lorwyn phase)
        ashling/        ← named character: Ashling the Pilgrim
      treefolk/         ← ancient treefolk, Colfenor (Lorwyn phase)
      boggarts/         ← boggart warrens (Lorwyn phase)
      giants/           ← wandering giants (Lorwyn phase)

  shadowmoor/
    places/             ← Shadowmoor locations, blighted landscapes
    creatures/          ← all living beings (tribes + misc)
      elves/            ← Wilt-Leaf elves (Shadowmoor phase)
      kithkin/          ← doun kithkin, Suls (Shadowmoor phase)
      faeries/          ← faeries (Shadowmoor phase)
      merrow/           ← merrow (Shadowmoor phase)
      flamekin/         ← flamekin / cinders (Shadowmoor phase)
      treefolk/         ← treefolk (Shadowmoor phase)
      boggarts/         ← boggarts (Shadowmoor phase)
      giants/           ← giants (Shadowmoor phase)
```

## Referencing art in content.js

Two helper functions are available:

```js
// Full-bleed landscape image between paragraphs
ART_BLEED('art/lorwyn/places/goldmeadow.png')

// Floated portrait (right or left)
ART_PORTRAIT('art/lorwyn/creatures/elves/elf_warrior.jpg', 'right')
```

To replace a placeholder with real art, swap the `PH()` or `PH_BLEED()` call
with the appropriate `ART_*` call pointing to the correct folder.

## File naming conventions

- Use lowercase, underscores, no spaces: `gilt_leaf_ambush.webp`
- Prefix with the subject where helpful: `elf_moonglove.jpg`, `boggart_warren.jpg`
- Accepted formats: `.png`, `.jpg`, `.webp`
- Lorwyn-phase art goes under `lorwyn/`; Shadowmoor-phase art goes under `shadowmoor/`
- **All creatures (including tribes) live under `creatures/`** — places/ is only landscapes
- **Named characters** get their own subfolder inside their tribe, e.g.
  `lorwyn/creatures/flamekin/ashling/`, `lorwyn/creatures/treefolk/colfenor/`. Filenames
  inside the character folder can still be prefixed with the character name for clarity.

## Currently populated

| Folder                             | Files |
|------------------------------------|-------|
| lorwyn/places                      | 34    |
| lorwyn/creatures/boggarts          | 12    |
| lorwyn/creatures/flamekin          | 10    |
| lorwyn/creatures/flamekin/ashling  | 6     |
| lorwyn/creatures/merrow            | 9     |
| lorwyn/creatures/kithkin           | 10    |
| lorwyn/creatures/changelings       | 10    |
| lorwyn/creatures/elves             | 9     |
| lorwyn/creatures/faeries           | 10    |
| lorwyn/creatures/giants            | 10    |
| lorwyn/creatures/elementals        | 0 (empty) |
| lorwyn/creatures/treefolk          | empty — placeholders in use |
