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
    'date_display': 'Dimanche 4 avril 2027',
    'venue':        'Centre Omnisports Universitaire Carole Vergne, Gif-sur-Yvette',
}

# Chaque équipe :
# (num, equipe, club, division, ctrl, ves_in, ves_out, depot, tapis1, tapis2, dyn, musique, competition)
# Mettre None pour une case vide (tapis1 ou tapis2)

BLOCK1 = {
    'label': 'BLOC 1',
    'time':  'Premier passage : 10:50',
    'teams': [
        ( 1, 'Paris Cheer', 'Majesty', 'U18-3', '10:05', '10:07', '10:17', '10:19', '10:21', None,    '10:33', '10:37', '10:50'),
        ( 2, '', '', '—', '10:10', '10:12', '10:22', '10:24', None,    '10:26', '10:38', '10:42', '10:55'),
        ( 3, '', '', '—', '10:15', '10:17', '10:27', '10:29', '10:31', None,    '10:43', '10:47', '11:00'),
        ( 4, '', '', '—', '10:20', '10:22', '10:32', '10:34', None,    '10:36', '10:48', '10:52', '11:05'),
        ( 5, '', '', '—', '10:25', '10:27', '10:37', '10:39', '10:41', None,    '10:53', '10:57', '11:10'),
        ( 6, '', '', '—', '10:30', '10:32', '10:42', '10:44', None,    '10:46', '10:58', '11:02', '11:15'),
        ( 7, '', '', '—', '10:35', '10:37', '10:47', '10:49', '10:51', None,    '11:03', '11:07', '11:20'),
        ( 8, '', '', '—', '10:40', '10:42', '10:52', '10:54', None,    '10:56', '11:08', '11:12', '11:25'),
        ( 9, '', '', '—', '10:45', '10:47', '10:57', '10:59', '11:01', None,    '11:13', '11:17', '11:30'),
        (10, '', '', '—', '10:50', '10:52', '11:02', '11:04', None,    '11:06', '11:18', '11:22', '11:35'),
        (11, '', '', '—', '10:55', '10:57', '11:07', '11:09', '11:11', None,    '11:23', '11:27', '11:40'),
        (12, '', '', '—', '11:00', '11:02', '11:12', '11:14', None,    '11:16', '11:28', '11:32', '11:45'),
        (13, '', '', '—', '11:05', '11:07', '11:17', '11:19', '11:21', None,    '11:33', '11:37', '11:50'),
        (14, '', '', '—', '11:10', '11:12', '11:22', '11:24', None,    '11:26', '11:38', '11:42', '11:55'),
        (15, '', '', '—', '11:15', '11:17', '11:27', '11:29', '11:31', None,    '11:43', '11:47', '12:00'),
        (16, '', '', '—', '11:20', '11:22', '11:32', '11:34', None,    '11:36', '11:48', '11:52', '12:05'),
        (17, '', '', '—', '11:25', '11:27', '11:37', '11:39', '11:41', None,    '11:53', '11:57', '12:10'),
        (18, '', '', '—', '11:30', '11:32', '11:42', '11:44', None,    '11:46', '11:58', '12:02', '12:15'),
        (19, '', '', '—', '11:35', '11:37', '11:47', '11:49', '11:51', None,    '12:03', '12:07', '12:20'),
        (20, '', '', '—', '11:40', '11:42', '11:52', '11:54', None,    '11:56', '12:08', '12:12', '12:25'),
        (21, '', '', '—', '11:45', '11:47', '11:57', '11:59', '12:01', None,    '12:13', '12:17', '12:30'),
        (22, '', '', '—', '11:50', '11:52', '12:02', '12:04', None,    '12:06', '12:18', '12:22', '12:35'),
        (23, '', '', '—', '11:55', '11:57', '12:07', '12:09', '12:11', None,    '12:23', '12:27', '12:40'),
        (24, '', '', '—', '12:00', '12:02', '12:12', '12:14', None,    '12:16', '12:28', '12:32', '12:45'),
        (25, '', '', '—', '12:05', '12:07', '12:17', '12:19', '12:21', None,    '12:33', '12:37', '12:50'),
        (26, '', '', '—', '12:10', '12:12', '12:22', '12:24', None,    '12:26', '12:38', '12:42', '12:55'),
    ],
    'ceremony': {
        'label': 'AWARDS CEREMONY - BLOC 1',
        'time':  '13:00 – 13:30',
        'note':  'Remise des prix Bloc 1 — Prep & Universitaire',
    },
}

BLOCK2 = {
    'label': 'BLOC 2',
    'time':  'Premier passage : 13:40',
    'teams': [
        (27, '', '', '—', '12:55', '12:57', '13:07', '13:09', '13:11', None,    '13:23', '13:27', '13:40'),
        (28, '', '', '—', '13:00', '13:02', '13:12', '13:14', None,    '13:16', '13:28', '13:32', '13:45'),
        (29, '', '', '—', '13:05', '13:07', '13:17', '13:19', '13:21', None,    '13:33', '13:37', '13:50'),
        (30, '', '', '—', '13:10', '13:12', '13:22', '13:24', None,    '13:26', '13:38', '13:42', '13:55'),
        (31, '', '', '—', '13:15', '13:17', '13:27', '13:29', '13:31', None,    '13:43', '13:47', '14:00'),
        (32, '', '', '—', '13:20', '13:22', '13:32', '13:34', None,    '13:36', '13:48', '13:52', '14:05'),
        (33, '', '', '—', '13:25', '13:27', '13:37', '13:39', '13:41', None,    '13:53', '13:57', '14:10'),
        (34, '', '', '—', '13:30', '13:32', '13:42', '13:44', None,    '13:46', '13:58', '14:02', '14:15'),
        (35, '', '', '—', '13:35', '13:37', '13:47', '13:49', '13:51', None,    '14:03', '14:07', '14:20'),
        (36, '', '', '—', '13:40', '13:42', '13:52', '13:54', None,    '13:56', '14:08', '14:12', '14:25'),
        (37, '', '', '—', '13:45', '13:47', '13:57', '13:59', '14:01', None,    '14:13', '14:17', '14:30'),
        (38, '', '', '—', '13:50', '13:52', '14:02', '14:04', None,    '14:06', '14:18', '14:22', '14:35'),
        (39, '', '', '—', '13:55', '13:57', '14:07', '14:09', '14:11', None,    '14:23', '14:27', '14:40'),
        (40, '', '', '—', '14:00', '14:02', '14:12', '14:14', None,    '14:16', '14:28', '14:32', '14:45'),
        (41, '', '', '—', '14:05', '14:07', '14:17', '14:19', '14:21', None,    '14:33', '14:37', '14:50'),
        (42, '', '', '—', '14:10', '14:12', '14:22', '14:24', None,    '14:26', '14:38', '14:42', '14:55'),
        (43, '', '', '—', '14:15', '14:17', '14:27', '14:29', '14:31', None,    '14:43', '14:47', '15:00'),
        (44, '', '', '—', '14:20', '14:22', '14:32', '14:34', None,    '14:36', '14:48', '14:52', '15:05'),
        (45, '', '', '—', '14:25', '14:27', '14:37', '14:39', '14:41', None,    '14:53', '14:57', '15:10'),
        (46, '', '', '—', '14:30', '14:32', '14:42', '14:44', None,    '14:46', '14:58', '15:02', '15:15'),
        (47, '', '', '—', '14:35', '14:37', '14:47', '14:49', '14:51', None,    '15:03', '15:07', '15:20'),
        (48, '', '', '—', '14:40', '14:42', '14:52', '14:54', None,    '14:56', '15:08', '15:12', '15:25'),
        (49, '', '', '—', '14:45', '14:47', '14:57', '14:59', '15:01', None,    '15:13', '15:17', '15:30'),
        (50, '', '', '—', '14:50', '14:52', '15:02', '15:04', None,    '15:06', '15:18', '15:22', '15:35'),
        (51, '', '', '—', '14:55', '14:57', '15:07', '15:09', '15:11', None,    '15:23', '15:27', '15:40'),
        (52, '', '', '—', '15:00', '15:02', '15:12', '15:14', None,    '15:16', '15:28', '15:32', '15:45'),
        (53, '', '', '—', '15:05', '15:07', '15:17', '15:19', '15:21', None,    '15:33', '15:37', '15:50'),
        (54, '', '', '—', '15:10', '15:12', '15:22', '15:24', None,    '15:26', '15:38', '15:42', '15:55'),
        (55, '', '', '—', '15:15', '15:17', '15:27', '15:29', '15:31', None,    '15:43', '15:47', '16:00'),
        (56, '', '', '—', '15:20', '15:22', '15:32', '15:34', None,    '15:36', '15:48', '15:52', '16:05'),
        (57, '', '', '—', '15:25', '15:27', '15:37', '15:39', '15:41', None,    '15:53', '15:57', '16:10'),
        (58, '', '', '—', '15:30', '15:32', '15:42', '15:44', None,    '15:46', '15:58', '16:02', '16:15'),
        (59, '', '', '—', '15:35', '15:37', '15:47', '15:49', '15:51', None,    '16:03', '16:07', '16:20'),
        (60, '', '', '—', '15:40', '15:42', '15:52', '15:54', None,    '15:56', '16:08', '16:12', '16:25'),
        (61, '', '', '—', '15:45', '15:47', '15:57', '15:59', '16:01', None,    '16:13', '16:17', '16:30'),
        (62, '', '', '—', '15:50', '15:52', '16:02', '16:04', None,    '16:06', '16:18', '16:22', '16:35'),
        (63, '', '', '—', '15:55', '15:57', '16:07', '16:09', '16:11', None,    '16:23', '16:27', '16:40'),
        (64, '', '', '—', '16:00', '16:02', '16:12', '16:14', None,    '16:16', '16:28', '16:32', '16:45'),
        (65, '', '', '—', '16:05', '16:07', '16:17', '16:19', '16:21', None,    '16:33', '16:37', '16:50'),
        (66, '', '', '—', '16:10', '16:12', '16:22', '16:24', None,    '16:26', '16:38', '16:42', '16:55'),
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
            'Contrôle\nID',
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
            num, equipe, club, div, ctrl, ves_in, ves_out, depot, t1, t2, dyn, mus, comp = team
            row = [
                p(str(num),        'Helvetica-Bold', 8.5, C_NUM,  TA_CENTER),
                p(equipe or '',    'Helvetica',      8,   C_TEXT, TA_LEFT),
                p(club or '',      'Helvetica',      7.5, C_DIM,  TA_LEFT),
                p(div or '',       'Helvetica',      8,   C_TEXT, TA_CENTER),
                p(ctrl,            'Courier',        8.5, C_TEXT, TA_CENTER),
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

        # Ligne cérémonie / pause
        cer = block['ceremony']
        note = f"  —  {cer['note']}" if cer.get('note') else ''
        cer_text = f"{cer['label']}   {cer['time']}{note}"
        rows.append([p(cer_text, 'Helvetica-Bold', 8, C_TEXT, TA_CENTER)] + [''] * (N - 1))
        meta.append('ceremony')

    # Largeurs colonnes (proportions)
    ratios = [0.03, 0.11, 0.12, 0.06, 0.07, 0.07, 0.07, 0.06, 0.07, 0.07, 0.07, 0.07, 0.07]
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

    # ── Titre centré ──────────────────────────────────────────────────────────
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
        "Les \u00e9quipes doivent imp\u00e9rativement se pr\u00e9senter \u00e0 l\u2019heure indiqu\u00e9e au contr\u00f4le d\u2019identit\u00e9 sous peine de disqualification.",
        ParagraphStyle('note', fontName='Helvetica', fontSize=7,
                       textColor=HexColor("#888888"), alignment=TA_CENTER),
    ))

    doc.build(story)
    print(f"PDF g\u00e9n\u00e9r\u00e9 : {os.path.abspath(OUTPUT)}")


if __name__ == '__main__':
    generate()
