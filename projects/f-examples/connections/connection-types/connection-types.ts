import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { EFConnectableSide, FCanvasComponent, FFlowModule } from '@foblex/flow';

type NodeId = string;

interface Node {
  id: NodeId;
  label: string;
  position: { x: number; y: number };
}

interface Edge {
  id: string; // unique for stable ordering
  sourceId: NodeId;
  targetId: NodeId;
}

@Component({
  selector: 'connection-types',
  styleUrls: ['./connection-types.scss'],
  templateUrl: './connection-types.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FFlowModule],
})
export class ConnectionTypes {
  private readonly _canvas = viewChild.required(FCanvasComponent);
  public readonly connectableSide = EFConnectableSide;
  nodes: Node[] = [
    { id: 'source', label: 'Source', position: { x: 250, y: 300 } },
    { id: 'source1', label: 'Source', position: { x: 500, y: 250 } },
    { id: 'source2', label: 'Source', position: { x: 600, y: 250 } },
    { id: 'target', label: 'Target (ports = incoming edges)', position: { x: 250, y: 500 } },
  ];

  edges: Edge[] = [
    { id: 'e1', sourceId: 'source', targetId: 'target' },
    { id: 'e2', sourceId: 'source', targetId: 'target' },
    { id: 'e3', sourceId: 'source', targetId: 'target' },
    { id: 'e4', sourceId: 'source', targetId: 'target' },
    { id: 'e5', sourceId: 'source', targetId: 'target' },
    { id: 'e6', sourceId: 'source1', targetId: 'target' },
    { id: 'e7', sourceId: 'source2', targetId: 'target' },
    // add { id:'e3', sourceId:'source', targetId:'target' } to get a 3rd port, etc.
  ];

  // ---------- Port IDs ----------
  outPortId(nodeId: NodeId) {
    return `${nodeId}:out:0`;
  }
  inPortId(nodeId: NodeId, idx: number) {
    return `${nodeId}:in:${idx}`;
  }

  // ---------- Compute number of input ports (== incoming edge count) ----------
  inCount(nodeId: NodeId): number {
    return this.edges.filter((e) => e.targetId === nodeId).length;
  }

  // ---------- Stable index of an edge among all edges to the same target ----------
  inIndex(edge: Edge): number {
    const sameTarget = this.edges
      .filter((e) => e.targetId === edge.targetId)
      // stable order so indices don’t shuffle when array mutates:
      .sort((a, b) => a.sourceId.localeCompare(b.sourceId) || a.id.localeCompare(b.id));

    return sameTarget.findIndex((e) => e.id === edge.id);
  }

  // Show a bottom output if node has at least one outgoing edge
  hasOutgoing(nodeId: NodeId): boolean {
    return this.edges.some((e) => e.sourceId === nodeId);
  }

  // Spread top ports evenly (in %) across the node width
  portLeftPercent(i: number, n: number): number {
    return ((i + 1) / (n + 1)) * 100;
  }
  protected loaded(): void {
    this._canvas()?.resetScaleAndCenter(false);
  }
}
