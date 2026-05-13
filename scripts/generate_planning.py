#!/usr/bin/env python3
"""
Génère le PDF du planning de compétition Crown Cheerleading Events.
Modifier uniquement la section DONNÉES ci-dessous.

Dépendance : pip install reportlab
"""

from reportlab.lib.pagesizes import A3, landscape
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
import os

# ══════════════════════════════════════════════════════════════════════════════
# DONNÉES — modifier ici pour mettre à jour le planning
# ══════════════════════════════════════════════════════════════════════════════

EVENT = {
    'name':         'Crown Cheerleading Events',
    'date_display': 'Samedi 4 avril 2027',
    'venue':        'Dojo de Paris, Paris',
}

# Chaque équipe :
# (num, equipe, club, division, ves_in, ves_out, depot, tapis1, tapis2, dyn, musique, competition)
# Mettre None pour une case vide

BLOCK1 = {
    'label': 'BLOC 1 — OUVERTURE DES PORTES',
    'time':  '10:00',
    'teams': [
        (1,  '', '', '—', '10:02', '10:12', '10:17', '10:21', None,    '10:28', '10:32', '10:45'),
        (2,  '', '', '—', '10:10', '10:20', '10:25', None,    '10:29', '10:36', '10:40', '10:53'),
        (3,  '', '', '—', '10:18', '10:28', '10:33', '10:37', None,    '10:44', '10:48', '11:01'),
        (4,  '', '', '—', '10:26', '10:36', '10:41', None,    '10:45', '10:52', '10:56', '11:09'),
        (5,  '', '', '—', '10:34', '10:44', '10:49', '10:53', None,    '11:00', '11:04', '11:17'),
        (6,  '', '', '—', '10:42', '10:52', '10:57', None,    '11:01', '11:08', '11:12', '11:25'),
        (7,  '', '', '—', '10:50', '11:00', '11:05', '11:09', None,    '11:16', '11:20', '11:33'),
        (8,  '', '', '—', '10:58', '11:08', '11:13', None,    '11:17', '11:24', '11:28', '11:41'),
        (9,  '', '', '—', '11:06', '11:16', '11:21', '11:25', None,    '11:32', '11:36', '11:49'),
        (10, '', '', '—', '11:14', '11:24', '11:29', None,    '11:33', '11:40', '11:44', '11:57'),
        (11, '', '', '—', '11:22', '11:32', '11:37', '11:41', None,    '11:48', '11:52', '12:05'),
        (12, '', '', '—', '11:30', '11:40', '11:45', None,    '11:49', '11:56', '12:00', '12:13'),
        (13, '', '', '—', '11:38', '11:48', '11:53', '11:57', None,    '12:04', '12:08', '12:21'),
        (14, '', '', '—', '11:46', '11:56', '12:01', None,    '12:05', '12:12', '12:16', '12:29'),
        (15, '', '', '—', '11:54', '12:04', '12:09', '12:13', None,    '12:20', '12:24', '12:37'),
        (16, '', '', '—', '12:02', '12:12', '12:17', None,    '12:21', '12:28', '12:32', '12:45'),
        (17, '', '', '—', '12:10', '12:20', '12:25', '12:29', None,    '12:36', '12:40', '12:53'),
        (18, '', '', '—', '12:18', '12:28', '12:33', None,    '12:37', '12:44', '12:48', '13:01'),
    ],
    'ceremony': {
        'label': 'CEREMONIE BLOC 1',
        'time':  '13:05 – 13:45',
        'note':  'Les vestiaires du Bloc 2 sont ouverts dès 13:02',
    },
}

BLOCK2 = {
    'label': 'BLOC 2',
    'time':  'Premier passage : 13:45',
    'teams': [
        (19, '', '', '—', '13:02', '13:12', '13:17', '13:21', None,    '13:28', '13:32', '13:45'),
        (20, '', '', '—', '13:10', '13:20', '13:25', None,    '13:29', '13:36', '13:40', '13:53'),
        (21, '', '', '—', '13:18', '13:28', '13:33', '13:37', None,    '13:44', '13:48', '14:01'),
        (22, '', '', '—', '13:26', '13:36', '13:41', None,    '13:45', '13:52', '13:56', '14:09'),
        (23, '', '', '—', '13:34', '13:44', '13:49', '13:53', None,    '14:00', '14:04', '14:17'),
        (24, '', '', '—', '13:42', '13:52', '13:57', None,    '14:01', '14:08', '14:12', '14:25'),
        (25, '', '', '—', '13:50', '14:00', '14:05', '14:09', None,    '14:16', '14:20', '14:33'),
        (26, '', '', '—', '13:58', '14:08', '14:13', None,    '14:17', '14:24', '14:28', '14:41'),
        (27, '', '', '—', '14:06', '14:16', '14:21', '14:25', None,    '14:32', '14:36', '14:49'),
        (28, '', '', '—', '14:14', '14:24', '14:29', None,    '14:33', '14:40', '14:44', '14:57'),
        (29, '', '', '—', '14:22', '14:32', '14:37', '14:41', None,    '14:48', '14:52', '15:05'),
        (30, '', '', '—', '14:30', '14:40', '14:45', None,    '14:49', '14:56', '15:00', '15:13'),
        (31, '', '', '—', '14:38', '14:48', '14:53', '14:57', None,    '15:04', '15:08', '15:21'),
        (32, '', '', '—', '14:46', '14:56', '15:01', None,    '15:05', '15:12', '15:16', '15:29'),
        (33, '', '', '—', '14:54', '15:04', '15:09', '15:13', None,    '15:20', '15:24', '15:37'),
        (34, '', '', '—', '15:02', '15:12', '15:17', None,    '15:21', '15:28', '15:32', '15:45'),
        (35, '', '', '—', '15:10', '15:20', '15:25', '15:29', None,    '15:36', '15:40', '15:53'),
        (36, '', '', '—', '15:18', '15:28', '15:33', None,    '15:37', '15:44', '15:48', '16:01'),
        (37, '', '', '—', '15:26', '15:36', '15:41', '15:45', None,    '15:52', '15:56', '16:09'),
        (38, '', '', '—', '15:34', '15:44', '15:49', None,    '15:53', '16:00', '16:04', '16:17'),
        (39, '', '', '—', '15:42', '15:52', '15:57', '16:01', None,    '16:08', '16:12', '16:25'),
        (40, '', '', '—', '15:50', '16:00', '16:05', None,    '16:09', '16:16', '16:20', '16:33'),
        (41, '', '', '—', '15:58', '16:08', '16:13', '16:17', None,    '16:24', '16:28', '16:41'),
        (42, '', '', '—', '16:06', '16:16', '16:21', None,    '16:25', '16:32', '16:36', '16:49'),
        (43, '', '', '—', '16:14', '16:24', '16:29', '16:33', None,    '16:40', '16:44', '16:57'),
    ],
    'ceremony': {
        'label': 'CEREMONIE FINALE',
        'time':  '17:00 – 17:45',
        'note':  None,
    },
}

# ══════════════════════════════════════════════════════════════════════════════
# GÉNÉRATION PDF
# ══════════════════════════════════════════════════════════════════════════════

# Palette noir & blanc
C_WHITE     = HexColor("#FFFFFF")
C_ROW_ALT   = HexColor("#F2F2F2")   # ligne paire
C_THEAD     = HexColor("#4A4A4A")   # fond en-tête colonnes
C_BLOCK     = HexColor("#CCCCCC")   # fond ligne de bloc
C_CEREMONY  = HexColor("#E8E8E8")   # fond ligne cérémonie
C_BORDER    = HexColor("#CCCCCC")   # bordures
C_TEXT      = HexColor("#111111")   # texte principal
C_DIM       = HexColor("#888888")   # texte secondaire / case vide
C_NUM       = HexColor("#333333")   # numéro équipe

OUTPUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'docs', 'planning.pdf')
PAGE_W, PAGE_H = landscape(A3)
MARGIN = 12 * mm


def p(text, font='Helvetica', size=8, color=C_TEXT, align=TA_CENTER):
    return Paragraph(text, ParagraphStyle(
        'x', fontName=font, fontSize=size, textColor=color,
        alignment=align, leading=size * 1.35,
    ))


def build_table(blocks, usable_w):
    COLS = ['#', 'Équipe', 'Club', 'Division',
            'Vestiaire\nEntrée', 'Vestiaire\nSortie', 'Dépôt\nsacs',
            'Tapis 1', 'Tapis 2', 'Tapis\ndyn.', 'Musique', 'Routine']
    N = len(COLS)

    rows, meta = [], []

    # En-tête colonnes
    rows.append([p(h, 'Helvetica-Bold', 7.5, white, TA_CENTER) for h in COLS])
    meta.append('thead')

    team_idx = 0
    for block in blocks:
        # Ligne de bloc
        label = f"{block['label']}   {block['time']}"
        rows.append([p(label, 'Helvetica-Bold', 8, C_TEXT, TA_LEFT)] + [''] * (N - 1))
        meta.append('block')

        for team in block['teams']:
            num, equipe, club, div, ves_in, ves_out, depot, t1, t2, dyn, mus, comp = team
            row = [
                p(str(num),        'Helvetica-Bold', 8.5, C_NUM, TA_CENTER),
                p(equipe or '',    'Helvetica',      8,   C_TEXT, TA_LEFT),
                p(club or '',      'Helvetica',      7.5, C_DIM,  TA_LEFT),
                p(div or '',       'Helvetica',      8,   C_TEXT, TA_CENTER),
                p(ves_in,          'Courier',        8.5, C_TEXT, TA_CENTER),
                p(ves_out,         'Courier',        8.5, C_TEXT, TA_CENTER),
                p(depot,           'Courier',        8.5, C_TEXT, TA_CENTER),
                p(t1 or '—',       'Courier',        8.5, C_TEXT if t1 else C_DIM, TA_CENTER),
                p(t2 or '—',       'Courier',        8.5, C_TEXT if t2 else C_DIM, TA_CENTER),
                p(dyn,             'Courier',        8.5, C_TEXT, TA_CENTER),
                p(mus,             'Courier',        8.5, C_TEXT, TA_CENTER),
                p(f'<b>{comp}</b>','Courier-Bold',   9,   C_TEXT, TA_CENTER),
            ]
            rows.append(row)
            meta.append('even' if team_idx % 2 == 0 else 'odd')
            team_idx += 1

        # Ligne cérémonie
        cer = block['ceremony']
        note = f"  —  {cer['note']}" if cer.get('note') else ''
        cer_text = f"{cer['label']}   {cer['time']}{note}"
        rows.append([p(cer_text, 'Helvetica-Bold', 8, C_TEXT, TA_CENTER)] + [''] * (N - 1))
        meta.append('ceremony')

    # Largeurs colonnes (proportions)
    ratios = [0.03, 0.12, 0.14, 0.07, 0.08, 0.08, 0.07, 0.07, 0.07, 0.07, 0.07, 0.08]
    col_w = [r * usable_w for r in ratios]

    # Styles
    styles = [
        ('GRID',          (0, 0), (-1, -1), 0.4, C_BORDER),
        ('VALIGN',        (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING',    (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING',   (0, 0), (-1, -1), 4),
        ('RIGHTPADDING',  (0, 0), (-1, -1), 4),
    ]

    for i, m in enumerate(meta):
        if m == 'thead':
            styles += [
                ('BACKGROUND',    (0, i), (-1, i), C_THEAD),
                ('TOPPADDING',    (0, i), (-1, i), 6),
                ('BOTTOMPADDING', (0, i), (-1, i), 6),
                ('LINEBELOW',     (0, i), (-1, i), 1, C_TEXT),
            ]
        elif m == 'block':
            styles += [
                ('SPAN',          (0, i), (-1, i)),
                ('BACKGROUND',    (0, i), (-1, i), C_BLOCK),
                ('LEFTPADDING',   (0, i), (-1, i), 8),
                ('TOPPADDING',    (0, i), (-1, i), 5),
                ('BOTTOMPADDING', (0, i), (-1, i), 5),
                ('LINEABOVE',     (0, i), (-1, i), 0.5, HexColor("#999999")),
                ('LINEBELOW',     (0, i), (-1, i), 0.5, HexColor("#999999")),
            ]
        elif m == 'even':
            styles += [('BACKGROUND', (0, i), (-1, i), C_ROW_ALT)]
        elif m == 'odd':
            styles += [('BACKGROUND', (0, i), (-1, i), C_WHITE)]
        elif m == 'ceremony':
            styles += [
                ('SPAN',          (0, i), (-1, i)),
                ('BACKGROUND',    (0, i), (-1, i), C_CEREMONY),
                ('TOPPADDING',    (0, i), (-1, i), 7),
                ('BOTTOMPADDING', (0, i), (-1, i), 7),
                ('LINEABOVE',     (0, i), (-1, i), 0.8, HexColor("#999999")),
                ('LINEBELOW',     (0, i), (-1, i), 0.8, HexColor("#999999")),
            ]

    tbl = Table(rows, colWidths=col_w, repeatRows=1)
    tbl.setStyle(TableStyle(styles))
    return tbl


def generate():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=landscape(A3),
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=MARGIN, bottomMargin=MARGIN,
    )

    usable_w = PAGE_W - 2 * MARGIN
    story = []

    # ── Titre centré (style image de référence) ──────────────────────────────
    story.append(Paragraph(
        f'<b>{EVENT["name"]}</b>',
        ParagraphStyle('t1', fontName='Helvetica-Bold', fontSize=14,
                       textColor=black, alignment=TA_CENTER, leading=18),
    ))
    story.append(Paragraph(
        f'{EVENT["date_display"]}  \u2013  {EVENT["venue"]}',
        ParagraphStyle('t2', fontName='Helvetica', fontSize=10,
                       textColor=HexColor("#555555"), alignment=TA_CENTER, leading=14),
    ))
    story.append(Spacer(1, 6 * mm))

    # ── Tableau ──────────────────────────────────────────────────────────────
    story.append(build_table([BLOCK1, BLOCK2], usable_w))

    story.append(Spacer(1, 4 * mm))
    story.append(Paragraph(
        "Ce planning est indicatif et susceptible d\u2019\u00eatre modifi\u00e9. "
        "Les \u00e9quipes doivent imp\u00e9rativement respecter leurs cr\u00e9neaux sous peine de disqualification.",
        ParagraphStyle('note', fontName='Helvetica', fontSize=7,
                       textColor=HexColor("#888888"), alignment=TA_CENTER),
    ))

    doc.build(story)
    print(f"PDF g\u00e9n\u00e9r\u00e9 : {os.path.abspath(OUTPUT)}")


if __name__ == '__main__':
    generate()
