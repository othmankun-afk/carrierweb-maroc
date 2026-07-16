<?php
/**
 * Plugin Name: CarrierWeb — Pages éditables (Gutenberg)
 * Description: Alimente les pages fixes du site (contenu Gutenberg) pour les rendre
 *              éditables par blocs dans WordPress. Le front Next.js lit le contenu
 *              via WPGraphQL (`page(id: "...", idType: URI)`) et retombe sur le
 *              contenu codé en dur si la page n'existe pas. Auto-seed idempotent :
 *              on ne crée la page QUE si elle n'existe pas — les modifications de
 *              l'éditeur ne sont jamais écrasées. Même modèle que cw-temoignages.php.
 */

if (!defined('ABSPATH')) exit;

add_action('wp_loaded', function () {

    // ── Pourquoi CarrierWeb (/pourquoi-carrierweb) ─────────────────────────
    if (!get_page_by_path('pourquoi-carrierweb', OBJECT, 'page')) {

        $content = <<<'HTML'
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Spécifications Matérielles &amp; Réseau</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Conçu pour répondre aux contraintes du transport professionnel.</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Technologie Embarquée Propriétaire</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Ordinateurs de bord et boîtiers GPS conçus spécifiquement pour résister aux conditions routières extrêmes.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Connectivité Multi-Opérateurs</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Basculement automatique entre les principaux réseaux télécoms marocains pour garantir zéro zone blanche.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Sécurité &amp; Robustesse</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Boîtiers renforcés et inviolables avec alertes instantanées en cas de sabotage ou de débranchement.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Hébergement Cloud Sécurisé</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Serveurs redondés à haute disponibilité assurant un accès en ligne 24h/24 et 7j/7.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Performance &amp; Précision</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Contrairement aux solutions de géolocalisation classiques basées sur de simples traceurs d'importation, CarrierWeb conçoit et développe son propre écosystème matériel (ordinateur de bord, sonde ReeferMate™) et logiciel.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cette maîtrise totale garantit une collecte de données de haute précision sur l'état du véhicule, la température des remorques frigorifiques et la consommation réelle de gazole sans perturber l'ordinateur de bord d'origine du constructeur.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Matériel certifié CE et homologué ANRT au Maroc</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mises à jour firmware automatiques et à distance (OTA)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Installation physique par nos techniciens qualifiés à Casablanca</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Pourquoi CarrierWeb</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Rentabilité (ROI)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Réduisez le ralenti moteur et le budget carburant de votre flotte de 15% en moyenne.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">API ouverte</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Connectez facilement nos données de trajet et température à SAP, Sage ou votre TMS.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Support de proximité</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Bénéficiez de la présence de nos équipes de techniciens d'assistance à Casablanca.</p>
<!-- /wp:paragraph -->
HTML;

        wp_insert_post([
            'post_type'    => 'page',
            'post_status'  => 'publish',
            'post_title'   => 'Pourquoi CarrierWeb — Notre Technologie',
            'post_name'    => 'pourquoi-carrierweb',
            'post_content' => $content,
        ]);
    }
});
